import { Category } from "./category";
import { omit } from "lodash";
describe("Category Tests", () => {
  test("constructor of category", () => {
    //criação todos os campos
    let category = new Category({
      name: "Movie",
      description: "Some description",
      is_active: false,
    });
    let created_at = new Date();
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "Some description",
      is_active: false,
      created_at,
    });

    //criação apenas com campo nome
    category = new Category({ name: "Movie" });
    let props = omit(category.props, "created_at");
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    //VARIAÇÕES
    category = new Category({
      name: "Movie",
      description: "Other description",
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "Other description",
    });

    category = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });

    category = new Category({
      name: "Movie",
      created_at,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      created_at,
    });
  });

  //GET AND SETS
  test("Getter of name prop", () => {
    const category = new Category({ name: "Name" });
    expect(category.name).toBe("Name");
  });

  test("Getter and setter of description prop", () => {
    let category = new Category({ name: "Name" });
    expect(category.description).toBeNull();

    category = new Category({
      name: "Name",
      description: "other description",
    });
    expect(category.description).toBe("other description");

    category = new Category({ name: "Name" });

    category["description"] = "other test";
    expect(category.description).toBe("other test");
    category["description"] = undefined;
    expect(category.description).toBeNull();
    category["description"] = null;
    expect(category.description).toBeNull();
  });

  test("Getter and setter of is_active prop", () => {
    let created_at = new Date();

    let category = new Category({ name: "Name" });
    expect(category.is_active).toBeTruthy();

    category = new Category({ name: "Name", is_active: true });
    expect(category.is_active).toBeTruthy();
    category = new Category({ name: "Name", is_active: false });
    expect(category.is_active).toBeFalsy();
  });

  test("Getter and setter of created_at prop", () => {
    let created_at = new Date();

    let category = new Category({ name: "Name" });
    expect(category.created_at).toBeInstanceOf(Date);

    category = new Category({ name: "Name", created_at });
    expect(category.created_at).toBe(created_at);
  });
});

/*  expect(category.name).toBe("Movie");
    expect(category.description).toBe("description");
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBe(created_at); */
