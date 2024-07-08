import styles from './SobreMim.modules.css';

import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Kayky!
            </h3>

            <img
                src={fotoSobreMim}
                alt='Foto de Kayky'
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a arcu et enim mattis vehicula id ut odio. Curabitur semper augue nec lobortis lobortis. Vestibulum imperdiet feugiat neque. Aliquam dolor turpis, placerat ac lobortis ut, volutpat eget nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vestibulum tincidunt laoreet. Suspendisse ipsum ante, tempor pretium condimentum in, imperdiet vitae odio. In scelerisque tempor enim, id venenatis justo elementum eget. Phasellus vehicula enim a libero tristique, ac viverra est volutpat. Aenean at egestas tellus, imperdiet facilisis lectus. Phasellus id odio id libero molestie fringilla a eu purus.
            </p>


            <p className={styles.paragrafo}>
                Fusce iaculis ante ut erat ultricies convallis eget bibendum odio. Nullam malesuada feugiat ex, at tristique velit rhoncus vitae. Nam auctor magna nulla, vel hendrerit tortor iaculis ac. Aenean elementum eu nisl a tristique. Ut vel ipsum magna. Integer scelerisque vitae nulla ac volutpat. Maecenas arcu lorem, facilisis scelerisque iaculis euismod, faucibus a nisi. Maecenas consequat dui a risus posuere convallis. Aenean nec ultricies elit.
            </p>


            <p className={styles.paragrafo}>
                Donec ullamcorper nisl sed ante bibendum tincidunt. Phasellus vel lectus ac nunc tempus vestibulum. Morbi nisl felis, pellentesque vel ultrices vel, vulputate gravida lacus. Pellentesque a fringilla tortor. Nullam egestas suscipit aliquet. Nullam at varius leo, a dapibus massa. Nam pellentesque accumsan dapibus. Praesent consectetur mauris at eros lacinia, et congue mi tincidunt. Proin id lobortis velit, ut vulputate erat. Vivamus placerat nulla justo, in eleifend arcu congue et. Aliquam ac lacus elit. Duis sit amet augue vitae nulla convallis venenatis ut sed dolor. Integer tincidunt a nulla non egestas.
            </p>

        </PostModelo>
    )
}