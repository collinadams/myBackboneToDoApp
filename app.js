var ItemModel = Backbone.Model.extend({

  initialize: function(title, date, content){
    this.title = title;
    this.date = date;
    this.content = content;
  },

  triggerRender: function(){
    this.trigger('reRender');
  }
});

var ItemView = Backbone.View.extend({

  template: _.template('<div class="parent"><div><%=title%></div><div><%=date%></div><div><%=content%></div></div>'),

  initialize: function(){
    this.model.on('reRender', this.render, this);
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes)); 
  }
});

var ItemsCollection = Backbone.Collection.extend({
  model: ItemModel
});

var ItemsView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  render: function(){
    this.collection.map(function(toDoItemModel){
      toDoItemModel.triggerRender();
    });
  }
})

