/*
    
同步:
    如果在函数返回的时候，调用者就能够得到预期的返回值或结果
异步:
    如果在函数返回的时候，调用者不能得到预期的返回值或结果，
    而是需要在将来通过一定的手段得到
任务队列：
    (消息队列、事件队列，总而言之和异步任务相关的队列)

    队列特点就是先进先出的数据结构，和排队一样，哪个异步任务操作完成的早，
    就排在最前面。无论异步操作何时开始执行，只要异步操作执行完成，
    就可以进去任务队列排队

事件循环(event loop)
    js调控同步和异步任务的机制称为事件循环

    (主线程任务全部执行完之后，任务队列中的回调函数会再次回到调用栈
    中执行，俗称事件循环。)
详细过程
    1、所有的同步代码都在主执行栈上调用，形成了一个执行栈
    2、除了执行栈，还会有一个“任务队列”。只要异步操作执行完成，就到任务队列排队
    3、一旦执行栈的所有同步代码执行完毕之后，系统就会读取任务队列里面
    的异步任务，被读取的异步任务结束等待状态，进栈和出栈
    4、主线程不断的重复上面的三步骤(Event Loop)
    (重复获取信息、执行信息、再获取信息、再执行。。。)

*/
{
  let t = Date.now()
  for (let i = 0; i < 10000000; i++) {}
  console.log(Date.now() - t)
}

{
  function fn() {
    return new Promise((res, rej) => {
      console.log(1)
      let p = new Promise((res, rej) => {
        console.log(2)
        setTimeout(() => {
          console.log(3)
          res(4)
        }, 0)
        res(5)
      })
      res(6)
      p.then(res => console.log(res))
    })
  }

  fn().then(res => console.log(res))
  console.log(7)
  //127563
}
