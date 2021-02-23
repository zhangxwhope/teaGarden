'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
  const collection = db.collection('unicloud-test')
  const docList = await collection.limit(1).get()
  if (!docList.data || docList.data.length === 0) {
    return {
      status: -1,
      msg: '集合unicloud-test内没有数据'
    }
  }
  const res = await collection.doc(docList.data[0]._id).remove()
  if (res.deleted === 1) {
    return {
      status: 0,
      msg: '成功删除unicloud-test内第一条数据'
    }
  } else {
    return {
      status: -2,
      masg: '删除数据失败'
    }
  }
	
	//返回数据给客户端
	// return event
};
