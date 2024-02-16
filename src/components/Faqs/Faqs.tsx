import React from 'react'


import styles from "./Faqs.module.scss"

function Faqs() {
    return (
        <div className={styles.main} id="faqs">
            <div className={styles.container}>
                <div className={styles.title}>FAQ</div>
                <div className={styles.accordionContainer}>
                    <details className={styles.details}>
                        <summary className={styles.summary}>
                            <div className={styles.summaryTitle}>¿Qué es Helpful Thinking?</div>
                        </summary>
                        <p className={styles.text}>Helpful Thinking es una plataforma de terapia online. Contamos con un equipo internacional de psicólogos y psiquiatras clínicos. <br/><br/> Trabajamos para normalizar el tratamiento y promoción de la salud mental. Modernizamos la forma en que las personas abordan su salud mental, ofrecemos un servicio fácilmente accesible y seguro en un entorno donde los problemas psicológicos están adquiriendo un peso cada vez más relevante sobre las personas y la sociedad.</p>
                    </details>
                    <details className={styles.details}>
                        <summary className={styles.summary}>
                            <div className={styles.summaryTitle}>¿Cómo funciona Helpful Thinking?</div>
                        </summary>
                        <p className={styles.text}>Empieza tu terapia en tres simples pasos: <br/><br/>a. Rellena el formulario de evaluación (y link al formulario)<br/>b. Se te asigna el profesional que más se adecua a tu situación.<br/>c. Empieza tu terapia online.</p>
                    </details>
                    <details className={styles.details}>
                        <summary className={styles.summary}>
                            <div className={styles.summaryTitle}>¿Cómo agendar mi primera cita?</div>
                        </summary>
                        <p className={styles.text}>Si es la primera sesión, solo tienes que rellenar el formulario de evaluación (link) y escoger el día y hora que mejor se adecuan a tus necesidades.<br/> <br/>Si ya has iniciado el tratamiento, puedes agendar la sesión en tu cuenta de <strong>Helpful-Thinking.com. </strong></p>
                    </details>
                    <details className={styles.details}>
                        <summary className={styles.summary}>
                            <div className={styles.summaryTitle}>¿En qué situaciones deberías de acudir a Helpful Thinking?</div>
                        </summary>
                        <p className={styles.text}>Siempre es un buen momento para hablar con un especialista en salud mental. La prevención de problemas psicológicos es un elemento clave para el bienestar emocional, psicológico y social.<br/><br/>En Helpful Thinking damos cobertura a múltiples problemas relacionados con la salud mental, puedes ver más detalles en las áreas de tratamiento (link áreas de tratamiento).</p>
                    </details>
                    <details className={styles.details}>
                        <summary className={styles.summary}>
                            <div className={styles.summaryTitle}>¿La terapia en línea es efectiva?</div>
                        </summary>
                        <p className={styles.text}>Sí. La telemedicina es un campo más novedoso y en expansión. Concretamente, la atención telemática a la salud mental sí aparece como una vía beneficiosa, eficaz y resolutiva y además cuenta con amplia satisfacción de usuarios y profesionales. Puede tener alguna limitación como la pérdida de información o los fallos técnicos y por ello no en todos los casos o situaciones es adecuada. Si has decidido hacer una consulta online es importante prepararse: busca un entorno donde puedas tener intimidad, libre de distracciones y ruidos incómodos y que dispones de los medios técnicos necesarios.<br/><br/> Conéctate con tu móvil, tablet u ordenador. Asegúrate de tener acceso a una cámara/webcam, micrófono y conexión a internet.</p>
                    </details>
                </div>
                <div className={styles.subtitle}>
                    ¿No encuentras respuesta a tu pregunta? envíanos un email a
                </div>
                <div className={styles.mail}>hello@helpful-thinking.com</div>
            </div>
        </div>
    )
}

export default Faqs