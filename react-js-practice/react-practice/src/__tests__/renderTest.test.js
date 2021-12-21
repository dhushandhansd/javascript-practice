import React from "react";
import { create, act } from "react-test-renderer";
import ButtonEle from "../testing/ButtonEle";

const nameButton = create(<ButtonEle label="Shree Dhushandhan"/>)

test("Button Render with Snapshot Testing", () => {
  expect(nameButton).toMatchSnapshot()
})

test("Button Instances Testing", () => {
  const {root} = nameButton

  const buttonInstance = root.findByType("button")
  const buttonInstanceById= root.findByProps("")

  expect(buttonInstance).toBeTruthy()
  expect(buttonInstanceById).toBeTruthy()
})

test("Button Press Testing", () => {
  const buttonInstance = nameButton.root.findByProps({testId : 'name-button'}).props
  act(() => buttonInstance.onClick())

  const textInstance = nameButton.root.findByProps({testId : 'name-label'}).props
  expect(textInstance.children).toEqual('button pressed')

})