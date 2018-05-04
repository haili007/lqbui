export default {
    name: "kz-table-footer-dom",
    mounted() {
    },
    props: {

        footComponent: {
            type: Object,
            default:null
        },

    },
    methods: {

    },
    render(h) { 
        if(this.footComponent&&this.footComponent.renderCell){
           return <tbody >
            {this.footComponent.renderCell(h,{})}
        </tbody> 
        }else{
            return <tbody ></tbody> 
        }
    }
}