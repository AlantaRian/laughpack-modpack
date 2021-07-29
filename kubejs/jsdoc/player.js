/**
 * @typedef ServerPlayer
 * @type {Object}
 * @property {boolean} OP
 * @property {number} absorptionAmount
 * @property {function} addExhaustion
 * @property {function} addItemCooldown
 * @property {function} addMotion
 * @property {function} addXP
 * @property {undefined} advancementDone
 * @property {number} airSupply
 * @property {boolean} alive
 * @property {function} addFood
 * @property {boolean} animal
 * @property {function} attack
 * @property {object} attackingEntity
 * @property {function} ban
 * @property {object} block
 * @property {function} boostElytraFlight
 * @property {boolean} boss
 * @property {function} canEntityBeSeen
 * @property {object} chestArmorItem
 * @property {boolean} child
 * @property {object} class
 * @property {function} closeInventory
 * @property {function} closeOverlay
 * @property {boolean} creativeMode
 * @property {boolean} crouching
 * @property {object} customName
 * @property {boolean} customNameAlwaysVisible
 * @property {function} damageEquipment
 * @property {function} damageHeldItem
 * @property {object} data
 * @property {function} dismountRidingEntity
 * @property {object} displayName
 * @property {boolean} elytraFlying
 * @property {function} equals
 * @property {undefined} equipment
 * @property {number} eyeHeight
 * @property {object} facing
 * @property {boolean} fake
 * @property {number} fallDistance
 * @property {object} feetArmorItem
 * @property {number} foodLevel
 * @property {boolean} frame
 * @property {function} addXPLevels
 * @property {boolean} ambientCreature
 * @property {object} fullNBT
 * @property {undefined} gameMode
 * @property {function} getAbsorptionAmount
 * @property {function} getAirSupply
 * @property {function} getAttackingEntity
 * @property {function} getChestArmorItem
 * @property {function} getClass
 * @property {function} getBlock
 * @property {function} getCustomNameAlwaysVisible
 * @property {function} getDisplayName
 * @property {function} getData
 * @property {function} getEyeHeight
 * @property {function} getEquipment
 * @property {function} getFeetArmorItem
 * @property {function} getFoodLevel
 * @property {function} getFallDistance
 * @property {function} getFacing
 * @property {function} getHasCustomName
 * @property {function} getHeadArmorItem
 * @property {function} getHealth
 * @property {function} getHeldItem
 * @property {function} getHorizontalFacing
 * @property {function} getIdleTime
 * @property {function} getInventory
 * @property {function} getItem
 * @property {function} getLastAttackedEntity
 * @property {function} getLastAttackedEntityTime
 * @property {function} getLastDamageSource
 * @property {function} getLegsArmorItem
 * @property {function} getMainHandItem
 * @property {function} getMaxAirSupply
 * @property {function} getMaxHealth
 * @property {function} getMotionX
 * @property {function} getMotionY
 * @property {function} getMotionZ
 * @property {function} getMouseItem
 * @property {function} getMovementSpeed
 * @property {function} getName
 * @property {function} getNbt
 * @property {function} getNoClip
 * @property {function} getNoGravity
 * @property {function} getOffHandItem
 * @property {function} getOpenInventory
 * @property {function} getPassengers
 * @property {function} getPitch
 * @property {function} getProfile
 * @property {function} getPotionEffects
 * @property {function} getReachDistance
 * @property {function} getRecursivePassengers
 * @property {function} getRevengeTimer
 * @property {function} getRidingEntity
 * @property {function} getSelectedSlot
 * @property {function} getServer
 * @property {function} getSpawnLocation
 * @property {function} getStages
 * @property {function} getStats
 * @property {function} getStepHeight
 * @property {function} getTags
 * @property {function} getTeamId
 * @property {function} getTicksExisted
 * @property {function} getType
 * @property {function} getWorld
 * @property {function} getX
 * @property {function} getXp
 * @property {function} getXpLevel
 * @property {function} getY
 * @property {function} getYaw
 * @property {function} getZ
 * @property {function} give
 * @property {function} giveInHand
 * @property {boolean} glowing
 * @property {boolean} hasClientMod
 * @property {boolean} hasCustomName
 * @property {function} hashCode
 * @property {object} headArmorItem
 * @property {function} heal
 * @property {number} health
 * @property {undefined} heldItem
 * @property {undefined} holdingInAnyHand
 * @property {object} horizontalFacing
 * @property {object} id
 * @property {number} idleTime
 * @property {boolean} inWater
 * @property {object} inventory
 * @property {boolean} invisible
 * @property {function} isAdvancementDone
 * @property {function} isAlive
 * @property {function} isAmbientCreature
 * @property {function} isAnimal
 * @property {function} isBoss
 * @property {function} isChild
 * @property {function} isCreativeMode
 * @property {function} isCrouching
 * @property {function} isElytraFlying
 * @property {function} isFake
 * @property {function} isFrame
 * @property {function} isGlowing
 * @property {function} isHoldingInAnyHand
 * @property {function} isInWater
 * @property {function} isInvisible
 * @property {function} extinguish
 * @property {function} isLiving
 * @property {function} isMiningBlock
 * @property {function} isMonster
 * @property {function} isOP
 * @property {function} isOnGround
 * @property {function} getHasClientMod
 * @property {function} isOnLadder
 * @property {function} getId
 * @property {function} isOnScoreboardTeam
 * @property {function} isOnSameTeam
 * @property {function} isOp
 * @property {function} isPassenger
 * @property {function} getCustomName
 * @property {function} getFullNBT
 * @property {function} isPeacefulCreature
 * @property {function} isPlayer
 * @property {function} isSilent
 * @property {function} isSleeping
 * @property {function} isSpectator
 * @property {function} isSprinting
 * @property {function} isSwimming
 * @property {function} isUndead
 * @property {function} isUnderWater
 * @property {function} isWaterCreature
 * @property {object} item
 * @property {function} kick
 * @property {function} kill
 * @property {object} lastAttackedEntity
 * @property {number} lastAttackedEntityTime
 * @property {object} lastDamageSource
 * @property {object} legsArmorItem
 * @property {boolean} living
 * @property {object} mainHandItem
 * @property {number} maxAirSupply
 * @property {number} maxHealth
 * @property {function} getRevengeTarget
 * @property {object} minecraftEntity
 * @property {object} minecraftPlayer
 * @property {object} minecraftLivingEntity
 * @property {boolean} miningBlock
 * @property {boolean} monster
 * @property {undefined} motion
 * @property {number} motionX
 * @property {number} motionY
 * @property {number} motionZ
 * @property {object} mouseItem
 * @property {number} movementSpeed
 * @property {object} name
 * @property {object} nbt
 * @property {boolean} noClip
 * @property {boolean} noGravity
 * @property {function} notify
 * @property {function} notifyAll
 * @property {object} offHandItem
 * @property {boolean} onGround
 * @property {undefined} onFire
 * @property {boolean} onLadder
 * @property {undefined} onSameTeam
 * @property {undefined} onScoreboardTeam
 * @property {boolean} op
 * @property {object} openInventory
 * @property {function} openOverlay
 * @property {undefined} passenger
 * @property {object} passengers
 * @property {boolean} peacefulCreature
 * @property {number} pitch
 * @property {function} playSound
 * @property {boolean} player
 * @property {undefined} position
 * @property {undefined} positionAndRotation
 * @property {object} potionEffects
 * @property {object} profile
 * @property {function} rayTrace
 * @property {number} reachDistance
 * @property {object} recursivePassengers
 * @property {function} removePassengers
 * @property {object} revengeTarget
 * @property {number} revengeTimer
 * @property {function} revokeAdvancement
 * @property {object} ridingEntity
 * @property {undefined} rotation
 * @property {function} runCommand
 * @property {function} runCommandSilent
 * @property {number} selectedSlot
 * @property {function} sendData
 * @property {function} sendInventoryUpdate
 * @property {object} server
 * @property {function} setAbsorptionAmount
 * @property {function} setAirSupply
 * @property {function} setChestArmorItem
 * @property {function} setCreativeMode
 * @property {function} setCustomName
 * @property {function} setCustomNameAlwaysVisible
 * @property {function} setEquipment
 * @property {function} setFallDistance
 * @property {function} setFeetArmorItem
 * @property {function} setFoodLevel
 * @property {function} setFullNBT
 * @property {function} setGameMode
 * @property {function} setGlowing
 * @property {function} setHeadArmorItem
 * @property {function} setHealth
 * @property {function} setHeldItem
 * @property {function} setInvisible
 * @property {function} setLegsArmorItem
 * @property {function} setMainHandItem
 * @property {function} setMaxHealth
 * @property {function} setMotion
 * @property {function} setMotionX
 * @property {function} setMotionY
 * @property {function} setMotionZ
 * @property {function} setMouseItem
 * @property {function} setMovementSpeed
 * @property {function} setNoClip
 * @property {function} setNoGravity
 * @property {function} setOffHandItem
 * @property {function} setOnFire
 * @property {function} setPitch
 * @property {function} setPosition
 * @property {function} setPositionAndRotation
 * @property {function} setRevengeTarget
 * @property {function} setRotation
 * @property {function} setSelectedSlot
 * @property {function} setSilent
 * @property {function} setSpawnLocation
 * @property {function} setStatusMessage
 * @property {function} setStepHeight
 * @property {function} setX
 * @property {function} setXp
 * @property {function} setXpLevel
 * @property {function} setY
 * @property {function} setYaw
 * @property {function} setZ
 * @property {boolean} silent
 * @property {boolean} sleeping
 * @property {function} spawn
 * @property {object} spawnLocation
 * @property {boolean} spectator
 * @property {boolean} sprinting
 * @property {object} stages
 * @property {function} startRiding
 * @property {object} stats
 * @property {undefined} statusMessage
 * @property {number} stepHeight
 * @property {boolean} swimming
 * @property {function} swingArm
 * @property {object} tags
 * @property {object} teamId
 * @property {function} tell
 * @property {number} ticksExisted
 * @property {function} toString
 * @property {object} type
 * @property {boolean} undead
 * @property {boolean} underWater
 * @property {function} unlockAdvancement
 * @property {function} wait
 * @property {boolean} waterCreature
 * @property {object} world
 * @property {number} x
 * @property {number} xp
 * @property {number} xpLevel
 * @property {number} y
 * @property {number} yaw
 * @property {number} z
 */