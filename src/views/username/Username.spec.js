import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/vue"
import Username from "./Username.vue"
describe("Username",() => {
    describe.only("render", () => {
        const renderComponent = () => {
            render(Username, {props: {
                title: "",
                username: "", 
                password: "", 
                buttonText: "Sign In" ,
                signInPage: false,
                signinOrSignup: true
            },
            stubs: ["router-link", "PageLoading", "b-button", "b-input", "b-field"]
        },
            )
          
        } 
        it("has title ", () => {
       
            renderComponent();
            const header  = screen.queryByRole("heading", {name: "My account"})
            expect(header).toBeInTheDocument()
         
        })
        it("has username input", () => {
            renderComponent();
            const username = screen.queryByPlaceholderText("Username")
            expect(username).toBeInTheDocument();
         
        })
        it("has email input", () => {
            renderComponent();          
            const email = screen.queryByPlaceholderText("E-mail")
            expect(email).toBeInTheDocument();
           
           
        })
        it("has not  password input", () => {
            renderComponent();
            const password = screen.queryByPlaceholderText("******")
            expect(password).not.toBeInTheDocument();
           
        })
        it("has  button input", () => {
            renderComponent();
            const button = screen.queryByText("Save")
            expect(button).toBeInTheDocument();

        })
        it("should not have the text Click here to sign up", ()=> {
            renderComponent()
            const text = screen.queryByText("Click here to sign up.")
            expect(text).not.toBeInTheDocument()
        })
        it("should not have the text Click here to sign in", ()=> {
            renderComponent()
            const text = screen.queryByText("Click here to sign in.")
            expect(text).not.toBeInTheDocument()
        })
    })
})