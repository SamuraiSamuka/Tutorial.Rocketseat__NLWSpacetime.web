const style = {
  color: '#f00',
}

interface ButtonProps {
  title: string
}

export function Button(props: ButtonProps) {
  return <p style={style}>{props.title}</p>
}
