import React from "react";

//! 6to etapa del ciclo de vida
// Muerte del componente 💀
class Death extends React.Component {
	render() {
		return <h2>💀Cuando el click es impar, este componente se muere 💀</h2>;
	}

	// 6ta etapa del ciclo de vida
	// La destrucción del componente
	componentWillUnmount() {
		console.log("6. componentWillUnmount (Death Component)");
	}
}

export default Death;
