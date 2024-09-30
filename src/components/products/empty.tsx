export function ProductEmpty({name}: {name: string}) {
  return (
    <div className="w-full text-center my-10 space-y-5">
      <p className="text-3xl font-bold">Ops!</p>
      <p className="text-muted-foreground">Infelizmente não temos produtos na categoria <b>{name.toLowerCase()}</b>.</p>
    </div>
  )
}