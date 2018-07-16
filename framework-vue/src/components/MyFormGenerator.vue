<template>
  <div class="form-generator">
    <h1 class="text-center">Demo of vue-form-generator</h1>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">Form - <a href="https://github.com/vue-generators/vue-form-generator/blob/master/src/utils/validators.js#L22">Validator.js</a></div>
      <div class="panel-body">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">Model</div>
      <div class="panel-body">
        <pre v-if="model" v-html="prettyJSON(model)"></pre>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">Schema</div>
      <div class="panel-body">
        <pre v-if="model" v-html="prettyJSON(schema)"></pre>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
// import VueMultiselect from "vue-multiselect"; 
// Can not import VueMultiSelect by NPM, have to use import by external in index.html

export default {
  name: "MyFormGenerator",
  components: {
    "vue-form-generator": VueFormGenerator.component
  },
  data() {
    return {
      model: {
        id: 1,
        name: "John Doe",
        password: "J0hnD03!x4",
        age: 35,
        skills: ["Javascript", "VueJS"],
        ingredient : [
          {
                uuid: "39f05038-39ba-4cb9-8508-720806dcb20b",
                name: "Jabuticaba"
          }
        ],
        email: "john.doe@gmail.com",
        status: true,
        created: "- I'm very handsome!",
        friend: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "ID",
            model: "id",
            readonly: true,
            featured: false,
            disabled: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Name",
            model: "name",
            readonly: false,
            featured: true,
            required: true,
            disabled: false,
            placeholder: "User's name",
            min: 6,
            validator: VueFormGenerator.validators.string.locale({
              fieldIsRequired: "Nhập tên đi",
              textTooSmall: "Tên phải ít nhất {0}/{1} ký tự"
              // {0} là current character, {1} là min
            })
          },
          {
            type: "input",
            inputType: "password",
            label: "Password",
            model: "password",
            min: 6,
            required: true,
            hint: "Minimum 6 characters",
            validator: VueFormGenerator.validators.string.locale({
              fieldIsRequired: "Password không được để trống"
            }),
            onValidated: function(model, errors, field) {
              if (this.model.password.length > 20) {
                errors.push("Password quá dài");
              }
              return errors;
            },
            onChanged: function(model) {
              console.log(model.password);
            }
          },
          {
            type: "input",
            inputType: "number",
            label: "Age",
            model: "age",
            min: 18,
            validator: VueFormGenerator.validators.number.locale({
              numberTooSmall: "Tuổi phải trên {0} tuổi"
            })
          },
          {
            type: "input",
            inputType: "email",
            label: "E-mail",
            model: "email",
            placeholder: "User's e-mail address",
            validator: VueFormGenerator.validators.email.locale({
              invalidEmail: "Email chưa chuẩn"
            })
          },
          {
            type: "checklist",
            label: "Skills",
            model: "skills",
            multi: true,
            multiSelect: true,
            required: true,
            values: [
              "HTML5",
              "Javascript",
              "CSS3",
              "CoffeeScript",
              "AngularJS",
              "ReactJS",
              "VueJS"
            ]
          },
          {
            type: "vueMultiSelect",
            label: "Skills (vue-multiSelect field)",
            model: "ingredient",
            multi: true,
            multiSelect: true,
            required: true,
            max: 3,
            selectOptions: {
              multiple: true,
              searchable: true,
              clearOnSelect: true,
              hideSelected: true,
              taggable: true,
              trackBy: "uuid",
              label: "name",
              tagPlaceholder: "tagPlaceholder",
              onNewTag(newTag, id, options, value) {
                console.log("onNewTag", newTag, id, options, value);
                options.push(newTag);
                value.push(newTag);
              },
              // showPointer: true,
              onSearch(searchQuery, id, options) {
                console.log("onSearch", searchQuery, id, options);
              }
            },
            values: [
              {
                uuid: "a11e3f4b-d4f1-45ed-87fc-4eabda4e667e",
                name: "Cherimoya"
              },
              { uuid: "5ceb59c6-efe6-4c8a-a4bd-0ef621cd1e5d", name: "Pummelo" },
              {
                uuid: "39f05038-39ba-4cb9-8508-720806dcb20b",
                name: "Jabuticaba"
              },
              {
                uuid: "94adbe8d-f9db-481c-97c0-7198d5f3d810",
                name: "Kiwano melon"
              }
            ]
          },
          {
            type: "switch",
            label: "Status",
            model: "status",
            default: true,
            textOn: "Active",
            textOff: "Inactive"
          },
          {
            type: "label",
            label: "Note",
            model: "created"
          },
          {
            type: "radios",
            label: "Very best friend",
            model: "friend",
            values: ["James", "Nadia", "Paul", "Christelle", "Marc", "Marie"]
          },
          {
            type: "submit",
            buttonText: "Submit"
          }
        ]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    };
  },

  methods: {
    prettyJSON: function(json) {
      if (json) {
        json = JSON.stringify(json, undefined, 4);
        json = json
          .replace(/&/g, "&")
          .replace(/</g, "<")
          .replace(/>/g, ">");
        return json.replace(
          /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
          function(match) {
            var cls = "number";
            if (/^"/.test(match)) {
              if (/:$/.test(match)) {
                cls = "key";
              } else {
                cls = "string";
              }
            } else if (/true|false/.test(match)) {
              cls = "boolean";
            } else if (/null/.test(match)) {
              cls = "null";
            }
            return '<span class="' + cls + '">' + match + "</span>";
          }
        );
      }
    }
  }
};
</script>

<style>
html {
  font-family: Tahoma;
  font-size: 14px;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
}

pre {
  overflow: auto;
}
pre .string {
  color: #885800;
}
pre .number {
  color: blue;
}
pre .boolean {
  color: magenta;
}
pre .null {
  color: red;
}
pre .key {
  color: green;
}

h1 {
  text-align: center;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
}

fieldset {
  border: 0;
}

.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  border-color: #ddd;
}

.panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;

  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.panel-body {
  padding: 15px;
}

.field-checklist .wrapper {
  width: 100%;
}
</style>
