import { TagItemType } from "@/@types/tag"

function TagItem(props: TagItemType) {
    const department = props.content //학과
    return (
        <li>
            <input type="checkbox" />
            <label>{department}</label>
        </li>
    )
}

export default TagItem