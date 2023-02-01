interface TextButtonProps {
    text: string;
    className?: string;
}

export function TextButton({ text, className }: TextButtonProps) {
    return(
        <div className={`transition duration-150 ease-in-out cursor-pointer hover:opacity-75 active:opacity-50`}>
            <label className={`cursor-pointer ${className}`}>{text}</label>
        </div>
    );
}