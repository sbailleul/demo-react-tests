import {describe, it, beforeAll, afterEach, afterAll, expect} from 'vitest'
import { http, HttpResponse, PathParams } from 'msw'
import { setupServer } from 'msw/node'
import { UppercaseRequest, UppercaseResponse } from './state/ticket.slice';
import {debug} from 'vitest-preview';
import {render,screen} from '@testing-library/react'
import { BootstrapedApp } from './BootstrapedApp';
import userEvent from '@testing-library/user-event'


const server = setupServer(http.post<PathParams >('http://localhost:8080/tickets/uppercase', async ({ request}) => {
    const json= await request.json() as UppercaseRequest;
    return HttpResponse.json({content: json.payload.toUpperCase() } as UppercaseResponse)
}))

describe('Tickets', () => {
    beforeAll(() => {
        server.listen()
      })
       
    afterEach(() => {
    server.resetHandlers()
    })
    
    afterAll(() => {
    server.close()
    })
    it('should uppercase ticket on button clicked', async () => {
        server.listen()
        const user = userEvent.setup()

        render(<BootstrapedApp/>)
        const ticketContentInput =await screen.findByDisplayValue("Initial content");
        user.clear(ticketContentInput);
        await user.type(ticketContentInput, "Saucisse");
        const uppercaseBtn =await screen.findByText("Uppercase");
        await user.click(uppercaseBtn)
        debug();
        const uppercasedContent: HTMLInputElement =  await screen.findByDisplayValue("SAUCISSE", {exact:true, })
        expect(uppercasedContent).toBeDefined()
        expect(uppercasedContent.value).toBe("SAUCISSE")
        debug();
    })
})