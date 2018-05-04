组件使用方式 kz-table 
1.table组件
 范例：
<kz-table :row-class-name="tableRowClassName" table-wdith="1800px" :data="list">
    <kz-table-col type="selected"></kz-table-col>
    <kz-table-col label="序号" type="index"></kz-table-col>
    <kz-table-col label="名称">
        <template slot-scope="scope">
            <kz-editable-fuzzy style="width: 100%;height:100%"  @change="handlerChange" @keydown='send(scope,$event)' v-model="scope.row.aa" :data="list" :filter="true" :opts="opts1"></kz-editable-fuzzy>
        </template>
    </kz-table-col>
    <kz-table-col label="日期" edit  prop="bb" > </kz-table-col>
</kz-table>   

组件：kz-table
属性：
   1. row-class-name 自定义tr行class 接收一个函数 （非必填）
      形如：function(row,rowIndex){} 
      函数需要返回一个字符串 classname；
   2. table-width  自定义表格最大宽度，接收一个字符串类型宽度例如 100xp 10% 等 默认不填 则渲染成100%；
   3. data         表格渲染数据，接收一个数组类型。
   4. checkbox-change 接收一个 函数  当选择中的数据发生改变时 主动调用吧选中的数据给返回出来。

组件：kz-table-col 
属性：
   1. type 枚举类型 1.sleected 行选择框 2. index 行序号 3. item（可省略） 默认渲染  非必填 默认为 item类型 
   2. label 表头文字 非必填 默认为空
   3. edit  列是否可编辑 默认为false 目前只支持 text
   4. prop  需要渲染的数据字段

   5. slot-scope 组件内部slot 会回传 一个 scope 数据 包含 一个 object 
      内部字段如下：
      5.1 counts 表示这行的index值  
      5.2 row 表示这行的数据
      5.3 nextCompent 下一个可编辑的col组件 
      5.4 selectChange 组件内置的tab键切换方法 接收一个nextCompent对象 默认跳转到下一个可以编辑的单元格

组件：kz-table-foot 作为一个包装组件 内部可以嵌套默认额tr结构用于存放特殊的自定义表尾。      
属性： 暂无


2. 模糊查询组件
    范例
    <kz-fuzzy @change="handlerChange" @keydown="send" v-model="selVal" :data="list" :filter="true" :opts="opts1"></kz-fuzzy>
    <kz-editable-fuzzy style="width: 200px;height:50px" @change="handlerChange" @keydown="send" v-model="selVal1" :data="list" :filter="true" :opts="opts1"></kz-editable-fuzzy>

组件：kz-fuzzy   
    1. data 被模糊的数据对象 数组类型 可以是 字符串数组也可以是 对象数组。
    2. opts 组件设置 用来设置多列的模糊查询项。
       每个item包括 label 表头
                   prop 对应项属性
                   width 项宽度     
    3. keydown 当keydown时触发
    4. change  当某一模糊查询项目被选中时触发。
    5. v-model 绑定的一个值
    6. filter  是否开启前端字符串过滤 默认为false

 组件： kz-editable-fuzzy 
    参数同上 默认不展示编辑框              

       