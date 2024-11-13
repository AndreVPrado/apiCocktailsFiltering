import styles from './cards.module.css'

function Cards(props) {
  const nome = props.nome
  const imagem = props.imagem
  const ingredientes = props.ingredientes
  return (
    <div className={styles.card}>
      <h2>{nome}</h2>
      <img className={styles.foto} src={imagem}></img>
      <p>
        {
          ingredientes.map(
            (i, index) => {
              return (
                <>
                  {i}
                  {ingredientes.length - 1 == index ? "." : ", "}
                </>
              )
            })
        }
      </p>
    </div>
  )
}
export default Cards