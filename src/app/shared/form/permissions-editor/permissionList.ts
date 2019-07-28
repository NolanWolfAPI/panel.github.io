export default class PermissionList {
  private static panelData = "phrase.update,phrase.create,phrase.list,players.list,players.update,players.editor,ranks.list,ranks.create,ranks.editor,ranks.update,games.list,games.modes.list,games.modes.editor,games.modes.list,games.create,games.update,games.delete,vanities.list,vanities.editor,reports.list,reports.editor,staff.list,staff.create,staff.update,staff.editor,roles.list,roles.create,roles.update,roles.editor,case.list,case.create,case.update,chatfilters.list,chatfilters.create,chatfilters.update,chatfilters.delete,punishment.list,punishment.create,punishment.update,vanities.list,vanities.create,vanities.update,vanities.delete,languages.list,languages.create,languages.update,languages.delete,adverts.list,adverts.create,adverts.update,adverts.delete,customapiconfigs.list,customapiconfigs.create,customapiconfigs.update,customapiconfigs.delete";
  private static apiData = "api.players.get,api.players.update,api.players.delete,api.players.create,api.player.analytics.get,api.player.analytics.update,api.player.analytics.delete,api.player.analytics.create,api.staff.get,api.staff.update,api.staff.delete,api.staff.create,api.roles.get,api.roles.update,api.roles.delete,api.roles.create,api.globalvariables.get,api.globalvariables.update,api.globalvariables.delete,api.globalvariables.create,api.vanity.get,api.vanity.update,api.vanity.delete,api.vanity.create,api.friends.get,api.friends.update,api.friends.delete,api.friends.create,api.badges.get,api.badges.update,api.badges.delete,api.badges.create,api.adverts.get,api.adverts.update,api.adverts.delete,api.adverts.create,api.translations.phrases.get,api.translations.phrases.update,api.translations.phrases.delete,api.translations.phrases.create,api.translations.languages.get,api.translations.languages.update,api.translations.languages.delete,api.translations.languages.create,api.moderation.cases.get,api.moderation.cases.update,api.moderation.cases.delete,api.moderation.cases.create,api.moderation.chatfilterexpressions.get,api.moderation.chatfilterexpressions.update,api.moderation.chatfilterexpressions.delete,api.moderation.chatfilterexpressions.create,api.moderation.judgementsessions.get,api.moderation.judgementsessions.update,api.moderation.judgementsessions.delete,api.moderation.judgementsessions.create,api.moderation.punishments.get,api.moderation.punishments.update,api.moderation.punishments.delete,api.moderation.punishments.create,api.moderation.ranks.get,api.moderation.ranks.update,api.moderation.ranks.delete,api.moderation.ranks.create,api.moderation.reports.get,api.moderation.reports.update,api.moderation.reports.delete,api.moderation.reports.create,api.hubby.configs.get,api.hubby.configs.update,api.hubby.configs.delete,api.hubby.configs.create,api.currency.currencies.get,api.currency.currencies.update,api.currency.currencies.delete,api.currency.currencies.create,api.currency.transactions.get,api.currency.transactions.update,api.currency.transactions.delete,api.currency.transactions.create,api.bitmap.images.get,api.bitmap.images.update,api.bitmap.images.delete,api.bitmap.images.create,api.bitmap.locations.get,api.bitmap.locations.update,api.bitmap.locations.delete,api.bitmap.locations.create,api.moderation.punishments.get,api.moderation.punishments.create,api.moderation.punishments.update,api.moderation.punishments.delete,api.vanity.get,api.vanity.create,api.vanity.update,api.vanity.delete,api.player.reduced.get,api.player.reduced.create,api.player.reduced.update,api.player.reduced.delete,api.staff.reduced.get,api.staff.reduced.create,api.staff.reduced.update,api.staff.reduced.delete,api.games.get,api.games.create,api.games.update,api.games.delete,api.games.modes.get,api.games.modes.create,api.games.modes.update,api.games.modes.delete,api.customapiconfigs.get,api.customapiconfigs.create,api.customapiconfigs.update,api.customapiconfigs.delete";
  private static gameData = "chat.colours,hecate.debug,moderation.mute,moderation.judgement,moderation.goto,moderation.kick,moderation.slowmode,moderation.elevate,hermes.server,fly.hub,hub.premium";

  static getAllPermission(options) {
    let permissions = [];
    if (options.panel) permissions = permissions.concat(this.panelData.split(','));
    if (options.api) permissions = permissions.concat(this.apiData.split(','));
    if (options.game) permissions = permissions.concat(this.gameData.split(','));
    return permissions;
  }

  static getAutoCompletePermission(options) {
    return this.getAllPermission(options).reduce((a,v) => {
      a[(v)] = null;
      return a;
    },{});
  }
}