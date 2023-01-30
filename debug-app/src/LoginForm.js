import { useState} from "react";

const LoginForm = () => {
    const [username, setUsername ] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return(
        <form
            style={{
                display : "flex",
                flexDirection : "column",
                gap : "8px",
                padding : 16,
            }}
        >

            <input
                name="username" placeholder="Username" type="text" value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <input
                name="password" placeholder="password" type="password" value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <div>
                <input
                    id="rememberMe" name="remember_me" type="checkbox" checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="rememberMe">Remember me</label>
            </div>

            <input type="submit" name="login" value="Login" />
            
        </form>
    );
};

export default LoginForm;