import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  bigint,
  boolean,
  timestamp,
  jsonb,
  pgEnum,
  decimal,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ============ Enums ============

export const productStatusEnum = pgEnum("product_status", [
  "draft",
  "published",
  "archived",
]);

export const imageTypeEnum = pgEnum("image_type", [
  "photo",
  "lifestyle",
  "detail",
  "ai_generated",
]);

export const addressTypeEnum = pgEnum("address_type", ["shipping", "billing"]);

export const orderStatusEnum = pgEnum("order_status", [
  "pending",
  "confirmed",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
  "refunded",
]);

export const adminRoleEnum = pgEnum("admin_role", [
  "super_admin",
  "admin",
  "editor",
]);

// ============ Categories ============

export const categories = pgTable(
  "categories",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    slug: varchar("slug", { length: 100 }).notNull().unique(),
    nameEn: varchar("name_en", { length: 200 }).notNull(),
    nameZh: varchar("name_zh", { length: 200 }),
    description: text("description"),
    heroImageUrl: text("hero_image_url"),
    sortOrder: integer("sort_order").default(0),
    parentId: uuid("parent_id"),
    metadata: jsonb("metadata").$type<Record<string, unknown>>(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("categories_sort_idx").on(table.sortOrder),
  ]
);

export const categoriesRelations = relations(categories, ({ one, many }) => ({
  parent: one(categories, {
    fields: [categories.parentId],
    references: [categories.id],
    relationName: "parentChild",
  }),
  children: many(categories, { relationName: "parentChild" }),
  products: many(products),
}));

// ============ Products ============

export const products = pgTable(
  "products",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    slug: varchar("slug", { length: 200 }).notNull().unique(),
    nameEn: varchar("name_en", { length: 300 }).notNull(),
    subtitleEn: varchar("subtitle_en", { length: 500 }),
    descriptionEn: text("description_en"),
    story: text("story"),
    categoryId: uuid("category_id").references(() => categories.id),
    basePriceCents: bigint("base_price_cents", { mode: "number" }).notNull(),
    baseCurrency: varchar("base_currency", { length: 3 }).default("USD").notNull(),
    dimensions: jsonb("dimensions").$type<{
      length: number;
      width: number;
      height?: number;
      unit: string;
    }>(),
    weightGrams: integer("weight_grams"),
    materials: text("materials").array(),
    origin: varchar("origin", { length: 200 }),
    artisan: varchar("artisan", { length: 200 }),
    knotDensity: varchar("knot_density", { length: 100 }),
    dyeMethod: varchar("dye_method", { length: 200 }),
    agePeriod: varchar("age_period", { length: 200 }),
    condition: varchar("condition", { length: 50 }).default("new"),
    stockQuantity: integer("stock_quantity").default(1),
    sku: varchar("sku", { length: 100 }).unique(),
    status: productStatusEnum("status").default("draft").notNull(),
    featured: boolean("featured").default(false),
    metadata: jsonb("metadata").$type<Record<string, unknown>>(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("products_category_idx").on(table.categoryId),
    index("products_status_idx").on(table.status),
    index("products_featured_idx").on(table.featured),
    uniqueIndex("products_slug_idx").on(table.slug),
  ]
);

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  images: many(productImages),
  orderItems: many(orderItems),
}));

// ============ Product Images ============

export const productImages = pgTable(
  "product_images",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    productId: uuid("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    url: text("url").notNull(),
    altText: varchar("alt_text", { length: 500 }),
    sortOrder: integer("sort_order").default(0),
    type: imageTypeEnum("type").default("photo").notNull(),
    width: integer("width"),
    height: integer("height"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("product_images_product_idx").on(table.productId),
    index("product_images_sort_idx").on(table.productId, table.sortOrder),
  ]
);

export const productImagesRelations = relations(productImages, ({ one }) => ({
  product: one(products, {
    fields: [productImages.productId],
    references: [products.id],
  }),
}));

// ============ Customers ============

export const customers = pgTable(
  "customers",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    email: varchar("email", { length: 320 }).notNull().unique(),
    firstName: varchar("first_name", { length: 100 }),
    lastName: varchar("last_name", { length: 100 }),
    phone: varchar("phone", { length: 50 }),
    stripeCustomerId: varchar("stripe_customer_id", { length: 200 }),
    defaultCurrency: varchar("default_currency", { length: 3 }).default("USD"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("customers_email_idx").on(table.email),
  ]
);

export const customersRelations = relations(customers, ({ many }) => ({
  addresses: many(addresses),
  orders: many(orders),
}));

// ============ Addresses ============

export const addresses = pgTable("addresses", {
  id: uuid("id").defaultRandom().primaryKey(),
  customerId: uuid("customer_id")
    .notNull()
    .references(() => customers.id, { onDelete: "cascade" }),
  type: addressTypeEnum("type").default("shipping").notNull(),
  line1: varchar("line1", { length: 255 }).notNull(),
  line2: varchar("line2", { length: 255 }),
  city: varchar("city", { length: 100 }).notNull(),
  state: varchar("state", { length: 100 }),
  postalCode: varchar("postal_code", { length: 20 }).notNull(),
  country: varchar("country", { length: 2 }).notNull(), // ISO country code
  isDefault: boolean("is_default").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const addressesRelations = relations(addresses, ({ one }) => ({
  customer: one(customers, {
    fields: [addresses.customerId],
    references: [customers.id],
  }),
}));

// ============ Orders ============

export const orders = pgTable(
  "orders",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    orderNumber: varchar("order_number", { length: 20 }).notNull().unique(),
    customerId: uuid("customer_id").references(() => customers.id),
    status: orderStatusEnum("status").default("pending").notNull(),
    subtotalCents: bigint("subtotal_cents", { mode: "number" }).notNull(),
    shippingCents: bigint("shipping_cents", { mode: "number" }).default(0).notNull(),
    taxCents: bigint("tax_cents", { mode: "number" }).default(0).notNull(),
    totalCents: bigint("total_cents", { mode: "number" }).notNull(),
    currency: varchar("currency", { length: 3 }).default("USD").notNull(),
    exchangeRate: decimal("exchange_rate", { precision: 10, scale: 6 }).default("1.000000"),
    shippingAddressId: uuid("shipping_address_id").references(() => addresses.id),
    billingAddressId: uuid("billing_address_id").references(() => addresses.id),
    stripePaymentIntentId: varchar("stripe_payment_intent_id", { length: 200 }),
    stripeSessionId: varchar("stripe_session_id", { length: 200 }),
    trackingNumber: varchar("tracking_number", { length: 200 }),
    trackingUrl: text("tracking_url"),
    carrier: varchar("carrier", { length: 100 }),
    notes: text("notes"),
    metadata: jsonb("metadata").$type<Record<string, unknown>>(),
    placedAt: timestamp("placed_at"),
    shippedAt: timestamp("shipped_at"),
    deliveredAt: timestamp("delivered_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("orders_order_number_idx").on(table.orderNumber),
    index("orders_customer_idx").on(table.customerId),
    index("orders_status_idx").on(table.status),
  ]
);

export const ordersRelations = relations(orders, ({ one, many }) => ({
  customer: one(customers, {
    fields: [orders.customerId],
    references: [customers.id],
  }),
  shippingAddress: one(addresses, {
    fields: [orders.shippingAddressId],
    references: [addresses.id],
    relationName: "shippingAddress",
  }),
  billingAddress: one(addresses, {
    fields: [orders.billingAddressId],
    references: [addresses.id],
    relationName: "billingAddress",
  }),
  items: many(orderItems),
}));

// ============ Order Items ============

export const orderItems = pgTable("order_items", {
  id: uuid("id").defaultRandom().primaryKey(),
  orderId: uuid("order_id")
    .notNull()
    .references(() => orders.id, { onDelete: "cascade" }),
  productId: uuid("product_id")
    .notNull()
    .references(() => products.id),
  productSnapshot: jsonb("product_snapshot").$type<{
    name: string;
    slug: string;
    price: number;
    image?: string;
  }>().notNull(),
  quantity: integer("quantity").default(1).notNull(),
  unitPriceCents: bigint("unit_price_cents", { mode: "number" }).notNull(),
  totalCents: bigint("total_cents", { mode: "number" }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id],
  }),
  product: one(products, {
    fields: [orderItems.productId],
    references: [products.id],
  }),
}));

// ============ Admin Users ============

export const adminUsers = pgTable(
  "admin_users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    email: varchar("email", { length: 320 }).notNull().unique(),
    passwordHash: varchar("password_hash", { length: 200 }).notNull(),
    name: varchar("name", { length: 100 }),
    role: adminRoleEnum("role").default("editor").notNull(),
    isActive: boolean("is_active").default(true).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("admin_users_email_idx").on(table.email),
  ]
);

// ============ Exchange Rates ============

export const exchangeRates = pgTable("exchange_rates", {
  id: uuid("id").defaultRandom().primaryKey(),
  currencyCode: varchar("currency_code", { length: 3 }).notNull().unique(),
  rate: decimal("rate", { precision: 10, scale: 6 }).notNull(),
  symbol: varchar("symbol", { length: 5 }).notNull(),
  displayName: varchar("display_name", { length: 50 }).notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ============ Shipping Zones ============

export const shippingZones = pgTable("shipping_zones", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  countries: text("countries").array().notNull(),
  baseRateCents: bigint("base_rate_cents", { mode: "number" }).notNull(),
  perKgRateCents: bigint("per_kg_rate_cents", { mode: "number" }).default(0).notNull(),
  freeShippingThresholdCents: bigint("free_shipping_threshold_cents", { mode: "number" }),
  currency: varchar("currency", { length: 3 }).default("USD").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ============ Site Settings ============

export const siteSettings = pgTable("site_settings", {
  id: uuid("id").defaultRandom().primaryKey(),
  key: varchar("key", { length: 100 }).notNull().unique(),
  value: jsonb("value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
