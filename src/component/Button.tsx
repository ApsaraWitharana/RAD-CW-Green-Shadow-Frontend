import React from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({label, onClick, type = "button", className = "", disabled = false, icon,}) => {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-md ${className} ${
                disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
            }`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </button>
    );
};
