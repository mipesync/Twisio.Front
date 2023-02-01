interface SubmitInputProps {
    value: string;
}

export function SubmitInput({ value }: SubmitInputProps) {
    return(
        <input value={value} className="transition duration-150 ease-in-out bg-transparent w-[50%] px-5 py-2.5 rounded-3xl cursor-pointer font-medium hover:opacity-75 active:opacity-50" 
            type="submit"
            style={{
                background: "linear-gradient(93.82deg, #1D63B8 0%, #DE1B3B 100%)"
        }} />
    );
}