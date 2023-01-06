import React from 'react';

function NewButton() {
    return (
        <a href="https://retro.horuhe.dev" className="">
            <div className="absolute top-0 left-0 z-50 font-monoc p-2 hover:text-pink-500 transition-all duration-150 hover:translate-y-[-.2rem] text-xs text-gray-500">
                {`Feeling retro?`}
            </div>
        </a>
    );
}

export default NewButton;
