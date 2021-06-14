import topics from '../../src/mocks/data'
import axios from 'axios'

const tabsContainer = document.querySelector('.tabs-container')

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topicsDiv = document.createElement('div')
  const tab1 = document.createElement('div')
  const tab2 = document.createElement('div')
  const tab3 = document.createElement('div')

  topicsDiv.classList.add('topics')
  tab1.classList.add('tab')
  tab2.classList.add('tab')
  tab3.classList.add('tab')
  tab1.textContent = topics[0]
  tab2.textContent = topics[1]
  tab3.textContent = topics[2]

  topicsDiv.appendChild(tab1)
  topicsDiv.appendChild(tab2)
  topicsDiv.appendChild(tab3)

  return topicsDiv
}

function tabCreator(topics) {
  const newTab = document.createElement('h1')
  newTab.textContent = topics
  newTab.classList.add('tab')

  return newTab
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const response = axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(response => {
      response.data.forEach(topics => {
        const tab = tabCreator(topics)
        const tabDiv = document.querySelector(selector)
        tabsContainer.appendChild(topicsDiv)
      })
    })

  const tabs = document.querySelector(selector)
  tabs.appendChild(Tabs(response))

  return tabs
}

export { Tabs, tabsAppender }
