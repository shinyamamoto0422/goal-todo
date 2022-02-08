export const TodoTitle = ({ title, as }) => {
  if ( as === "h1" ) {
    return <h1 class="text-white1 text-2xl">{title}</h1>
  } else if ( as === "h2" ) {
    return <h2 class="text-white1 text-xl">{title}</h2>
  } else {
    return <p class="text-white1 text-xl">{title}</p>
  }
}