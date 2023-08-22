import { TagItemType } from "@/@types/tag"
import { Checkbox } from "@geist-ui/core"
import classNames from "classnames"

function TagItem(props: TagItemType) {
    const department = props.content //학과
    const handleTags = props.handleTags
    return (
        <li 
        className={classNames(
            'flex',
            'flex-row',
            'items-center',
        )}>
            <Checkbox type="success" onChange={() => {
                handleTags(department)
            }} />
            <label>{department}</label>
        </li>
    )
}

export default TagItem