import AsyncValidator from 'async-validator'

export default {
  methods: {
    validateFiled (model, rules, callback) {
      let validator = new AsyncValidator(rules)
      validator.validate(model, (errors, fields) => {
        return callback(errors, fields)
      })
    },
    getValidator (rules) {
      return new AsyncValidator(rules)
    }
  }
}
