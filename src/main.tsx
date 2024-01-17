import ReactDOM from "react-dom/client";
import '@radix-ui/themes/styles.css';
import App from "./components/App.tsx";
import Nav from "./components/Nav.tsx";
import "./index.css";
import { Theme, Container } from "@radix-ui/themes";
import { type PropsWithChildren } from "react";

const Main = ({ children }: PropsWithChildren) => (
    <Theme
        accentColor="plum"
        grayColor="gray"
        scaling="100%"
        radius="large"
        panelBackground="solid">
        <Nav />
        
        <Container size="3" mx="3">

            <App />
            {children}
        </Container>
    </Theme>
);



ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
