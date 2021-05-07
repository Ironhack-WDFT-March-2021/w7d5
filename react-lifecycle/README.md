# React Lifecycle Methods

There are three important phases in the lifecycle of a component

I - the phase where it attaches itself to the DOM and is known as mounting,
II - the phase where the component updates because of new props or state changes and is known as the updating phase and
III - the phase that takes part when a component is about to be destroyed and is called unmounting.
So let’s break it down a bit

#### Mounting or First Render
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

constructor()
render()
componentDidMount()
The constructor() get executed first when the component is first created. This is actually the same constructor we saw earlier in classes, so it’s the ES6 class feature, it’s not something related strictly to React.

We don’t have to use constructor() but if we do, we will use it to pass some props to it and by default it needs to contain super keyword used as a method that receives props as argument. Also, we may set the state in the constructor but don’t forget to use this keyword with it. The third thing the constructor might be used for is to bind the methods to the component.

The constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() to update the state everywhere else.

The render() method is next in the line when the component is being mounted. This method structures and prepares the JSX,
actually we can say, it returns JSX. Now React “mounts” onto the DOM.

Finally, componentDidMount() is called in the end just to confirm that this component is successfully mounted. Since the render() method is already executed, DOM will be already present. If DOM is present means that you can reference it. If we need to perform some side-effect code, like to do any asynchronous calls to databases or directly manipulate the DOM if you need. We shouldn’t call setState() here since this will lead to re-rendering of the component.

#### Updating
An update can be caused by changes of the props or state. The most commonly used methods when the component is being re-rendered are:

render()
componentDidUpdate()
render() will do the same as usual, sets up the JSX side of the component.

The most important in the update part is componentDidUpdate() and it does pretty much the same as componentDidMount(). Here we shouldn’t update the state but we can fetch some external data if we need it. While the mounting phase happens just once, the updating phase happens every time there is an internal change (meaning the change of the state or the props) that requires an update and each change will cause componentDidUpdate() to be called. When the componentDidUpdate() method gets called, you gain access to the props and state from when before the update was made, so basically you can have something like this componentDidUpdate(prevProps, prevState). You can get the current value for the props and state by calling this.props and this.state respectively. You can do a comparison to see what exactly changed (if anything) and then react accordingly.

#### Unmounting
componentWillUnmount() is called when a component is being removed from the DOM. You can use the to cleanup something that you did on component creation, like for example stopping setInterval() timers before the component gets destroyed and prevent memory leaking .