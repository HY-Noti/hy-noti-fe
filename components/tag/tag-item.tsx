import { TagItemType } from "@/@types/tag"
import { Checkbox } from "@geist-ui/core"
import classNames from "classnames"

function TagItem(props: TagItemType) {
    const department = props.content //학과
    const handleTags = props.handleTags
    const handleChecked = props.handleChecked

    return (
        <div
        className={classNames(
            'flex',
            'flex-row',
            'items-center',
        )}>
            <Checkbox type="success" 
            checked={handleChecked(department)}
            onChange={() => {
                handleTags(department)
            }} />
            <label>{department}</label>
        </div>
    )
}

export default TagItem