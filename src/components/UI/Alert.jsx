export const Alert = ({errorMessage}) => {
    return (
        <div class="ui red message">
            <div class="header">
                {errorMessage}
            </div>
        </div>
    )
}
