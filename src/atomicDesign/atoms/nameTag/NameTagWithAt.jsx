export const NameTagWithAt = ({ listName }) => {
    return (
        <textarea
            class="text-white2 text-size-sm text-center w-max-20 h-5"
        >
            @{listName}
        </textarea>
    );
};