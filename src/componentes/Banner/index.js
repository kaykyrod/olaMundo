import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a arcu et enim mattis vehicula id ut odio. Curabitur semper augue nec lobortis lobortis. Vestibulum imperdiet feugiat neque.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt='Circulo colorido'
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do ...'
                />
            </div>
        </div>
    )
}