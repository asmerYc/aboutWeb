/*
 * @Author: your name
 * @Date: 2020-12-14 20:44:33
 * @LastEditTime: 2020-12-14 21:32:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/designModel/工厂模式/factory.js
 */

 //我们使用构造函数去初始化对象，就是应用了构造器函数
function Person(name,age,sex){
  this.name = name;
  this.age = age;
  this.sex = sex;
}

console.log(new Person('张三',18,'男'))

// 简单工厂模式
// 核心思想：变的是什么？不变的是什么？
// 工厂模式其实就是将创建对象的过程单独封装，，工厂模式的目的，就是为了实现无脑传参


//工厂模式：开放与封闭
// 软件实体可以扩展，但是不可以修改

// 抽象工厂模式

class MobilePhoneFactory{
  // 提供操作系统的接口
  creatOS() {
    throw new Error('抽象工厂方法不允许我调用，你需要将我重写！')
  }
  // 提供硬件的接口
  creatHardWare() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写！')
  }
}

// 上边这个类 除了约定手机流水线的通用能力之外，啥也不干，如果你让它new 一个 MobilePhoneFactory实例，并尝试调用它的实例方法，他会给你报错
// 具体工厂继承自抽象工厂

class FakeStarFactory extends MobilePhoneFactory {
  creatOS() {
    // 提供安卓系统实例
    return new AndroidOS()
  }

  creatHardWare() {
    // 提供高通硬件实例
    return new QualcommHardWare()
  }
}