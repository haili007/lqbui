export default {
    name: "kz-table-body",
    mounted() {
        console.log(this)
    },
    props: {
        rowClassName:{
            defautl:null
        },
        selects: {
            type: Array,
            default: []
        },
        colComponent: {
            type: Array,
            default: []
        },
        data: {
            type: Array,
            default: []
        },
        col: {
            type: Array,
            default: []
        }
    },
    methods: {
        selectChange(e){
            this.$emit("select",e);
        },
        getNextEditCol(colNum,counts){
            for(let i=colNum+1;i<this.colComponent.length;i++){
                if(this.colComponent[i].edit){
                    return {next:this.colComponent[i],rowNum:counts,colNum:i}
                }
            }
            if(counts==(this.data.length-1)){
                return {next:null,rowNum:counts,colNum:0}
            }
            for(let i=0;i<=colNum;i++){
                if(this.colComponent[i].edit){
                    return {next:this.colComponent[i],rowNum:counts+1,colNum:i}
                }
            }
            return {next:null,rowNum:0,colNum:0}
        }
    },
    render(h) {
        let counts = (i) => {
            return i
        }
        var coms = (row, counts) => {
            return this.col.map((item, i) => {
                return this.colComponent[i].renderCell(h, { row: row, selects: this.selects,counts:counts,nextCompent:this.getNextEditCol(i,counts) }, this.selectChange)
            })
        }
        var list = this.data.map((row, i) => {
            return <tr on-click={(e)=>{
                this.$emit("click",{event:e,row:row,count:i})
            }} class={this.rowClassName&&this.rowClassName(row,i)}>
                {coms(row, i)}
            </tr>
        })
        return <tbody >
            {list}
        </tbody>
    }
}