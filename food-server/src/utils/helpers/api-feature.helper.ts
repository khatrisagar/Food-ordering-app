import { FoodItem } from "@/models";
export class APIFeature {
  query: any;
  queryString: any;
  page: number;
  limit: number;
  skip: number;
  constructor(query: any, queryString: any) {
    this.query = query;
    this.queryString = queryString;
    this.page = 1;
    this.limit = 5;
    this.skip = 0;
  }

  sort() {
    this.query = this?.query?.sort(this.JSONParser(this?.queryString?.sort));
    return this;
  }

  filter(allowedSearchFields: any) {
    const searchParams = this.JSONParser(this?.queryString?.search);
    console.log("searchParams", searchParams);
    const filterSearchQuery: Array<object> = [];
    allowedSearchFields.forEach((element: any) => {
      if (element.includes(".")) {
      } else {
        if (searchParams?.[element] && searchParams?.[element] !== "") {
          filterSearchQuery.push({
            [element]: { $regex: searchParams[element], $options: "i" },
          });
        }
      }
    });
    console.log(filterSearchQuery);

    if (filterSearchQuery.length) {
      this.query = this?.query.find({
        // $or: filterSearchQuery,
        // $where: "function() { return this.category.name === 'item1' }",
      });
    } else {
      this.query = this?.query.find();
    }

    // FoodItem.aggregate([
    //   {
    //     $lookup: {
    //       from: "foodcategories",
    //       localField: "category",
    //       foreignField: "_id",
    //       as: "category",
    //     },
    //   },
    //   { $match: { "category.name": "Pizza" } },
    // ]);
    return this;
  }
  pagination() {
    this.page = this?.queryString?.page
      ? parseInt(this.queryString.page)
      : this.page;
    this.limit = this?.queryString?.limit
      ? parseInt(this.queryString.limit)
      : this.limit;

    this.skip = (this.page - 1) * this.limit;

    this.query = this.query.skip(this.skip).limit(this.limit);
    return this;
  }
  JSONParser(queryStr: string) {
    try {
      return JSON.parse(queryStr);
    } catch {
      return null;
    }
  }
}
