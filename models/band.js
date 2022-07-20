<<<<<<< HEAD
'use strict';
=======
'use strict'
>>>>>>> 79d7a133160c7dd4072405bedb1f1f6f8a9dbf9d
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
<<<<<<< HEAD
    static associate(models) {
      // define association here
=======
    static associate({ MeetGreet, SetTime }) {
      // meet and greets
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets"
      })

      // set times 
      Band.hasMany(SetTime, {
        foreignKey: "band_id",
        set_times: "set_times"
      })
>>>>>>> 79d7a133160c7dd4072405bedb1f1f6f8a9dbf9d
    }
  }
  Band.init({
    band_id: {
<<<<<<< HEAD
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
=======
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
>>>>>>> 79d7a133160c7dd4072405bedb1f1f6f8a9dbf9d
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
<<<<<<< HEAD
  });
  return Band;
};
=======
  })
  return Band
}
>>>>>>> 79d7a133160c7dd4072405bedb1f1f6f8a9dbf9d
