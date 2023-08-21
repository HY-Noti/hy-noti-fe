import { TagItemType } from "@/@types/tag"

function TagItem(props: TagItemType) {
    const department = props.content //학과
    const handleTags = props.handleTags
    return (
        <li onClick={() => {
            handleTags(department)
        }}>
            <input type="checkbox" />
            <label>{department}</label>
        </li>
    )
}

export default TagItem