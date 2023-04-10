import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/vue"
import Signin from "./SigIn.vue"


describe.only("SignIn", () => {
    describe("Layout", () => {
        const renderComponent = () => {
            
            render(Signin, { props: {
                title: "",
                email: "",
                password: "",
                methodUser: "",
                buttonText: "Sign In" ,
                signInPage: true,
                signinOrSignup: true
            },
            stubs: ["router-link", "PageLoading", "b-button", "b-input", "b-field"]
         }
            );
        }
        it("has tittle", () => {
            renderComponent()
            const header  = screen.queryByRole("heading", {name: "Code Challenge"})
            expect(header).toBeInTheDocument()

        })
        it("has no username input ",  () => {
            renderComponent()
            const username =  screen.queryByLabelText("Username")
            expect(username).not.toBeInTheDocument()  
          
        })
        it("render password input", () => {
            renderComponent()
            const password = screen.queryByPlaceholderText("******");
            expect(password).toBeInTheDocument();
            
        })
        it("has e-mail input", async () => {
            renderComponent()
            const email = screen.queryByPlaceholderText("E-mail")
            expect(email).toBeInTheDocument();
        })
        it("has message to sign up", () => {
            renderComponent();
            const message  = screen.queryByText("Click here to sign up.")
            expect(message).toBeInTheDocument()
        })
        it("has button signin", ()=> {
            renderComponent();
            const button = screen.queryByText("Sign In");
            expect(button).toBeInTheDocument()
        })
    })
})