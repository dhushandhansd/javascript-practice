test("Numbers Tester", () => {
  expect(96 + 1).toBe(97);
});

test("Object Tester", () => {
  const apiData = {
    userName: "Tester",
    work: "Testing",
    mainWork: "Testing Always",
  };

  const samData = {
    userName: "Tester",
  };

  samData["work"] = "Testing";
  samData["mainWork"] = "Testing Always";

  expect(samData).toEqual(apiData);
});

test("Data Null Testing", () => {
  let jalabulaJung = "Jest";

  let done = false;

  let nameGot = "Jest";

  nameGot == jalabulaJung ? done = true : done = false

  expect(nameGot).not.toBe("West")
});

test("Truths", () => {
    const worth = NAN
    expect(worth).toBeNull()
    expect(worth).toBeDefined()
    expect(worth).not.toBeUndefined()
    expect(worth).not.toBeTruthy()
    expect(worth).toBeFalsy()
    expect(worth).not.toBeFalsy()
})

test("Number Tests", () => {
    const result = Math.round(6/7)

    expect(result).toBe(1)
    expect(result).toBeGreaterThan(0.5)
    expect(result).toBeLessThan(1.2)
})

test("String Tests", () => {
    expect('Tests').toMatch(/String/)
})

test("Containing Test", () => {
    const tableList = ['Pen Holder','Monitor', 'Laptop', 'Speaker', 'Phone']
    expect(tableList).toContain('Speaker')
})


test("Api Function Tester", () => {
    const apiData = {
        userName : "Shree Dhushandhan",
        age : 20
    }

    const apiGetter = () => {
        return apiData
    }

    expect(apiGetter).toEqual(apiData)
})