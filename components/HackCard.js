import Markdown from 'markdown-to-jsx';

const HackCard = (props) => {
    const issue = props.single_issue
    return (
        <div>
            <Markdown>{issue.body}</Markdown>
        </div>
    )
}
export default HackCard