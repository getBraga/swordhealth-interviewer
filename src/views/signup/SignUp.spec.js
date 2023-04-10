import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/vue"
import SignUp from "./SignUp.vue"

describe("SignUp", () => {
    describe("Layout", () => {
        const renderComponent = () => {
            render(SignUp, {props: {
                title: "",
                email: "",
                password: "",
                methodUser: Function,
                buttonText: "Sign In" ,
                signInPage: true,
                signinOrSignup: true
            },
            stubs: ["router-link", "PageLoading", "b-button", "b-input", "b-field"]
        },
            
            )
        }
        it("has username input " ,() => {
            renderComponent()
            const username = screen.queryByPlaceholderText("Username")
            expect(username).toBeInTheDocument()
        })
        it("has password input", () => {
            renderComponent()
            const password = screen.queryByPlaceholderText("******")
            expect(password).toBeInTheDocument()
        })
        it("has e-mail input", ()=> {
            renderComponent()
            const email  = screen.queryByPlaceholderText("E-mail")
            expect(email).toBeInTheDocument()
        })
        it("has signup button", ()=> {
            renderComponent()
            const button = screen.queryByText( "Sign Up")
            expect(button).toBeInTheDocument()
        })
        it("should not have the text Click here to sign in", ()=> {
            renderComponent()
            const text = screen.queryByText("Click here to sign in.")
            expect(text).toBeInTheDocument()
        })
        it("should not have the text Click here to sign up", ()=> {
            renderComponent()
            const text = screen.queryByText("Click here to sign up.")
            expect(text).not.toBeInTheDocument()
        })
    })
})