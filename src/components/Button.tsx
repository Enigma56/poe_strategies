type ButtonProps = {
    label: string
}

export const Button = ({label}: ButtonProps) => {
    return (
        <button
            className="h-10 px-2 bg-orange-50 rounded-md"
        > {label} </button>
    )
}