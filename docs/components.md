# Guide

* [Pagination 分页](#Pagination)

## Pagination 分页
在Element UI的pagination组件的基础上进行二次封装，有两种规格

### Example

```html
<vPage :pageObj="pageObj" v-on:changePage="changePage"></vPage>
```
```js
import vPage from '@/components/paging/Pagination';
<script>
  export default {
    data() {
      pageObj: {
        currentPage: 1,
        perPage: 10,
        pageTotal: 10,
        layOutString: 'total, sizes, prev, pager, next, jumper'
      }
    },
    methods: {
      changePage(val,gotoPage) {
        if (type === 'gotoPage') { // 页码数改变
          this.pageObj.currentPage = val;
        } else { // 每页数量改变
          this.pageObj.perPage = val;
        }
      }
    }
  }
</script>
```

### API

| 参数        | 说明           | 类型    | 可选值                               | 默认值  |
| ----------- | -------------- | ------- | ------------------------------------ | ------- |
| pageObj        | 参数对象       | Object  | - | - |

### PageObj

| 参数        | 说明           | 类型    | 可选值                               | 默认值  |
| ----------- | -------------- | ------- | ------------------------------------ | ------- |
| pageTotal        | 总条目数       | Number  | - | - |
| layOutString        | 组件布局       | String  | sizes, prev, pager, next, jumper, ->, total, slot | 'prev, pager, next, jumper, ->, total' |
| isSmall        | 是否使用小型分页       | Boolean  | - | false |
| pageTotal        | 总条目数       | Number  | - | - |
| changePage        | 页码或者每页数量发生改变时的回调，参数为(perPage,gotoPage)；perPage 标志每页数量发生的改变；gotoPage 标志为去到第几页    | Function  | - | - |
