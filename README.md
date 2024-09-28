## Simple Redux Example

#### In this example, I show how to implement simple redux storage using a single slice, store, provider, and two reducers. The state created and managed by the reducers is then used to set and modify a series of to-do items with different priorities which automatically renders a highlighted background based on the level of priority. Tasks can be added using a form
or removed using a remove button.

## Setting up the project
1. Download or fork and clone the project down. 
2. Open up the folder that houses the package.json file.
3. Run <code>npm i</code> or <code>npm install</code>
4. Use the <code>npm run dev</code> command to run the application.

## Understanding the components of Redux
1. There is a store.js file which will contain your state configuration. This object will have a key called "reducer", which will contain your difference "slices", organized by key names.
2. Your slice files (i.e. firstSlice.js) will contain your initial state for each slice (similar to useState) along with a list of reducers, which are essentially actions that you can use to modify the state in some way. All of these will be exported and used in your React components.
3. A provider will be wrapped around your main.jsx file with a singular prop that is passed to it. This prop will be the exported "store" from your store.js file. The Provider comes from the react-redux library.
4. In your components (i.e. App.jsx) you will need to import the actions (functions) defined in your slice's reducers array that you plan to use in that component. You will also want to import "useDispatch" for handling the reducer functions and "useSelector" for selecting the state that you want to have access to within that component.
5. That's all there is to it! Please let me know if you have any questions or need an update to this guide!

### Please let me know if you found this example useful! Thanks, and happy coding!

![image](https://github.com/user-attachments/assets/de134b52-24ec-4599-b60d-2e868ced1f51)
