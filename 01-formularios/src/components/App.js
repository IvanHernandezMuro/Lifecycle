
import React from 'react';

class App extends React.Component {
	state = {
		username: "",
		password: "",
	};

	handleUsernameInput(event) {
		this.setState({
			username: event.target.value,
		});
	}

	handlePasswordInput(event) {
		this.setState({
			password: event.target.value,
		});
	}

	handleSubmit(event) {
		// Detener la propagación del evento
		event.preventDefault();

		// NO HACER ESTO EN LA VIDA REAL, ES SOLO PARA PRUEBAS
		if (this.state.username === "admin" && this.state.password === "password") {
			alert("Bienvenido usuario administrador");
		} else {
			alert("Nombre de usuario o contraseña inválido");
		}
	}

	render() {
		return (
			<div className="wrapper">
				<div className="container">
					<h1>Bienvenido</h1>
					<h3>Ingresa usuario y contraseña para iniciar sesión</h3>

					<form className="form" onSubmit={(event) => this.handleSubmit(event)}>
						<input
							type="text"
							placeholder="Nombre de usuario"
							onChange={(event) => this.handleUsernameInput(event)}
						/>
						<input
							type="password"
							placeholder="Contraseña"
							onChange={(event) => this.handlePasswordInput(event)}
						/>
						<button type="submit" id="login-button">
							Enviar
						</button>
					</form>
				</div>

				<ul className="bg-bubbles">
					<li>🏈</li>
					<li>🍕</li>
					<li>🍗</li>
					<li>🥐</li>
					<li>🥞</li>
					<li>🍿</li>
					<li>🌭</li>
					<li>🍟</li>
          <li>🍔</li>
          <li>🏈</li>
					<li>🍕</li>
					<li>🍗</li>
					<li>🥐</li>
					<li>🥞</li>
					<li>🍿</li>
					<li>🌭</li>
					<li>🍟</li>
          <li>🍔</li>
        </ul>
			</div>
		);
	}
}

export default App;
