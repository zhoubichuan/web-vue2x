export default {
    functional: true,
    inject: ["tableRoot"],
    props: {
        row: Object,
        column: Object,
        index: Number,
    },
    render: (h, ctx) => {
        return h(
            "div",
            ctx.injections.tableRoot.$scopedSlots[ctx.props.column.slot2]({
                row: ctx.props.row,
                column: ctx.props.column,
                index: ctx.props.index,
            })
        )
    },
}