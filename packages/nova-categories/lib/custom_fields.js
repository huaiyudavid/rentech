import PublicationUtils from 'meteor/utilities:smart-publications';
import Posts from "meteor/nova:posts";
import Users from 'meteor/nova:users';
import Categories from "./collection.js";

// check if user can create a new post
const canInsert = user => Users.canDo(user, "posts.new");
// check if user can edit a post
const canEdit = Users.canEdit;

Posts.addField(
  {
    fieldName: 'categories',
    fieldSchema: {
      type: [String],
      control: "checkboxgroup",
      optional: true,
      insertableIf: canInsert,
      editableIf: canEdit,
      autoform: {
        noselect: true,
        type: "bootstrap-category",
        order: 50,
        options: function () {
          var categories = Categories.find().map(function (category) {
            return {
              value: category._id,
              label: category.name
            };
          });
          return categories;
        }
      },
      publish: true,
      join: {
        joinAs: "categoriesArray",
        collection: () => Categories
      }
    }
  }
);
Posts.addField({
  fieldName: 'End Date',
  fieldSchema: {
    type: Date,
    label: 'End Date',
    optional: true,
    publish: true,
    insertableIf: canInsert,
    editableIf: canEdit,
  }
});
Posts.addField({
    fieldName: 'Price',
    fieldSchema: {
      type: Number,
      optional: false,
      decimal: true,
      min: 0,
      publish: true,
      insertableIf: canInsert,
      editableIf: canEdit,
      join: {
        joinAs: "Price",
        // collection: () => Categories
      }
    }
  });
  Posts.addField({
      fieldName: 'Location',
      fieldSchema: {
        type: String,
        optional: false,
        decimal: true,
        min: 0,
        publish: true,
        insertableIf: canInsert,
        editableIf: canEdit,
      }
    });

PublicationUtils.addToFields(Posts.publishedFields.list, ["categories"]);
