export default {
    name: "kz-table-head",
    mounted() {

    },
    props: {
        data: {
            type: Array,
            default: []
        },
        selects: {
            type: Array,
            default: []
        },
        col: {
            type: Array,
            default: []
        }
    },
    methods: {

    },
    render(h) {
        var coms = this.col.map(item => {
            if (item.type != "selected") {
                return <th>
                    {item.label}
                </th>
            } else {
                return <th>
                    <input value="all" on-click={(e) => {
                        this.$emit("select",{ value: "all", checked: e.target.checked })
                    }} type="checkbox" checked={this.selects.length==this.data.length} />
                </th>
            }
        })
        return <thead>
            <tr>
                {coms}
            </tr>
        </thead>
    }
}