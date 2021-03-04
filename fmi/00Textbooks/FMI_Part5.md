#### 31 

## Chapter 

# 2 

## Building a Model 

## B 

 efore launching in to build a model, it’s important to think about model design, structure, layout, and planning. A well‐thought‐out design and clear project plan can make a huge difference to the quality and success of the modelling project. 

### Model design 

 Design can sometimes be the most difficult part of building a financial model and, in my experience, one of the most difficult to teach and learn. The best way to develop design skills is to critically assess other people’s models, taking note of what works and doesn’t, and then applying it to your own models. Even the simplest models can become complex if poorly designed, and a well‐designed model will be so straightforwardly logical that it will simply speak for itself. It’s pretty easy to just dive in and start building a model without thinking about the implications of the design. It’s not a bad idea to spend some time thinking about the layout before you get started. The layout and structure of the model relate to the look and feel of the model, and how users navigate through the model. The following examples outline a couple of different challenges you might come across when designing the layout of a model. 

#### p actical r example 1—assumptions layout 

 Let’s say you are creating a high‐level five‐year forecast. We’ve got 15,065 customers in 2017, and we are expecting that number to increase by 5 percent every year. If you set up your model as shown in Layout Option 1 in Figure 2.1, with only one growth assumption, you’re very much restricted to a single input for the growth number. 


#### 32 Using ExcEl for BUsinEss AnAlysis 

If we change the design of the calculations by adding multiple input assumption cells, and change the formula just a little, we are making our model a lot more flexible and useful in the long term. This way, if we decide to change the growth number for each year, as shown in Figure 2.2, we won’t need to change any of our formulas in the future, and our model is much more robust and less prone to error. Of course, Layout Option 2 is slightly more complex but is more functional for the user. This example demonstrates the constant balance that a modeller needs to maintain between functionality and simplicity when building a financial model. 

#### p actical r example 2—summary Categorisation 

Arranging products to display into categories in a model is another potentially difficult model layout problem. Let’s say you’re creating a pricing model for some advertising products. You’ve got print ads and digital ads, 

Figure 2.1 Model Layout Option 1 

Figure 2.2 Model Layout Option 2 


#### Building a Model 33 

and these are both split into Display and Text Only. The question is, should you display the output of the model as shown in Figure 2.3 or Figure 2.4? The example in Figure 2.4 is more concise, but shows less detail, so it really depends on how much detail you want to show your user. This comparison demonstrates the constant balance that a modeller needs to maintain between detail and conciseness when building a financial model. 

### t e h golden rules For Model design 

There are a few rules for model design that should be followed when designing the layout of a model. Most experienced modellers will follow these instinctively, as they are generally common sense. 

 Figure 2.3 Model Categorisation Option 1 

 Figure 2.4 Model Categorisation Option 2 


#### 34 Using ExcEl for BUsinEss AnAlysis 

#### s parate e inputs, Calculations, and results, Where possible 

Clearly label which sections of the model contain inputs, calculations, and results. They can be on separate worksheets or separate places on a given worksheet, but make sure that the user knows exactly what each section is for. Colour coding can help with ensuring that each section is clearly defined. See the forthcoming section titled “The Workbook Anatomy of a Model” for more discussion on whether it is always practical to separate these sections. 

#### u e s each Column for the same purpose 

This is particularly important when doing models involving time series. For example, in a time‐series model, knowing that labels are in Column B, unit data in Column C, constant values in Column D, and calculations in Column E makes it much easier when editing a formula manually. 

#### u e s one Formula per row or Column 

This forms the basis of the best‐practice principle whereby formulas are kept consistent using absolute, relative, and mixed referencing, as described in greater detail in Chapter 3, “Best Practice Principles of Modelling.” Keep formulas consistent when in a block of data, and never change a formula halfway through. 

#### r fer to the e left and above 

The model should read logically, like a book, meaning that it should be read from left to right and top to bottom. Calculations, inputs, and outputs should flow logically to avoid circular referencing. Be aware that there are times when left‐to‐right or top‐to‐bottom data flow can conflict somewhat with ease of use and presentation, so use common sense when designing the layout. By following this practice, we can avoid having calculations link all over the sheet, which makes it harder to check and update. Excel will also calculate more quickly if you build formulas in this way, because it calculates left to right, and top to bottom, so not only does it make your model easier to follow, it will calculate more efficiently. 

#### u e Multiple Worksheetss 

Avoid the temptation to put everything on one sheet. Especially when blocks of calculations are the same, use separate sheets for those that must be repeated to avoid the need to scroll across the screen. 


#### Building a Model 35 

#### i clude n documentation sheets 

A documentation sheet where assumptions and source data are clearly laid out is a critical part of any financial model. A cover sheet should not be confused with an assumptions sheet. A model can never have too much documentation! 

### d sign e issues 

Here are four key issues you need to think about before you start a model. 

**1. Time series:** Most financial models include a time‐series element, and     the majority of these will be monthly, quarterly, or annual. It’s impor-     tant to get this right from the start, as it’s much easier to summarise a     monthly model up to an annual basis than it is to split an annual model     down to a monthly basis! 

**2. Data collection:** Often, the majority of time is spent not in building a     model, but rather collecting, interpreting, analysing, and manipulating     data to put into the model. For example, you could be building an an-     nual model for your company’s fiscal year, which goes from July 1 to     June 30, but the survey data you’ve collected and want to include is for     the period January 1 to December 31. If you’ve got access to the raw     data on a monthly basis, you’ll be able to manipulate the data so that     it’s accurate—or else you’ll need to extrapolate. 

**3. Model purpose:** Think about what it is that you want the model to     do. What outputs do you expect the model to show? See “Types and     Purposes of Financial Models” in Chapter 1 for greater detail on dif-     ferent types of financial models. The outcome that you want the model     to show will greatly influence the design of the model. For example, in     a business case or project evaluation model, the outcome that we are     working toward is the net present value (NPV), and in order to get that,     we need cash flow, for which we need a profit‐and‐loss statement, and     this then determines how we build the model. **4. Model audience:** Who will be using your model in the future? If it’s     for only your use, no need to make it very fancy, but most models     are built for others to use. If so, you will need to make your model     as user‐friendly as possible, and clearly define which cells are input     variables and which cannot be changed. If you expect users to have     limited knowledge of Excel, the model needs to be as simple to use     as possible. 


#### 36 Using ExcEl for BUsinEss AnAlysis 

### t e Work h Book anatoMy oF a Model 

Typically, modellers will work from back to front when building their model. The output, or the part they want the viewer or user to see, will be at the front, calculations will go in the middle, and source data and assumptions should go at the back. Figure 2.5 shows an example of what your tabs in a well‐structured model might look like. Like the executive summary, a board paper, or other report, the first few pages should contain what casual viewers need to see at a glance. If they need further information, they can dig deeper into the model. Unless a model is very small, there should be a dedicated tab worksheet for each major component of the model. Whilst by no means a prescriptive list, the following is an example of what might be included on each tab. 

■ (^) **Cover sheet:** The cover sheet contains many details about the model. Whether or not a cover sheet is necessary is an issue for debate; one can include (but is not limited to) details such as: ■ (^) A log of changes and updates to the model with date, author, change details, and their impact to the output of the model. This is important for version control. ■ (^) Flow chart of the model structure. ■ (^) Table of contents. ■ (^) Instructions on how to use the model. ■ (^) The purpose of the model for which it should be used. ■ (^) Disclaimers as to the limitations of the model, legal liability, and caveats. ■ (^) Global or key assumptions integral to the use of the model. ■ (^) **Input sheet:** This is the only place where hard‐coded data is permissible. There may be one or more input sheets if there are copious amounts of data, but the input data should be laid out in logical blocks, for example: consumption data, WACC data, assets and depreciation data, inflation and indices, pricing and tariffs, assumptions and constants (such as tax rate, discount rates, concession rates). ■ (^) **Output, summary, and scenario sheets:** These present the final outcomes. They may also contain scenario drop‐down boxes, spin buttons, or check boxes that allow the users of the model to generate their own outputs. Tables and charts summarising the outputs should be set up in Figure 2.5 Model Structure 


#### Building a Model 37 

 such a way that they can be easily printed or used to generate reports. Ensure that these can be easily printed directly from the model, or copied or linked to other programs such as Word or PowerPoint. 

■ (^) **Calculation or workings sheets:** Split the calculation sheets logically and then, within each sheet, set them up consistently. If calculation sheets are split, ensure that the layout and formatting are as consistent as possible across all sheets. ■ (^) **Error check sheet:** This sheet contains links to all error checks in the model. Error checks should be performed in the calculation section, but a summary of all error checks in one location means that once the model is in use, the modellers can quickly check to see if any of the error checks have been triggered. 

#### Workbook anatomy issues 

Matters to consider when designing the layout and structure of the model include: 

■ (^) **A cover sheet:** Is a cover sheet necessary? It’s not absolutely critical, but it is good practice to put one in. In my experience, cover sheets and instruction pages are rarely used. If you decide not to include a cover sheet, make sure that the model contains explicit instructions regarding operation, purpose, assumptions, source data, and disclaimers. ■ (^) **Input and output locations:** Should there be a dedicated input sheet, or should the inputs and outputs be contained in one sheet? Many modelling specialists maintain that inputs, outputs, and calculations must be clearly separated, but this is not always practical. Generally, larger models should have a dedicated input sheet, whilst smaller models may show inputs and outputs on the same sheet. However, if you’ve created a large model with inputs and outputs on different sheets, and then want to perform a scenario analysis using a data table, you’ll need to move the inputs and outputs to the same sheet. For example, in a small model that takes inputs and generates simple tables of output data and charts in reports, the modeller may set up the sheet to have a block of input at the top of the worksheet with the calculations and charts directly underneath. You may consider splitting the charts and ratio calculations into separate worksheets to avoid the worksheet becoming too long and unwieldy. ■ (^) **Calculation organisation:** Should calculations be on one or multiple sheets? Depending on the size of the model, all calculations could be contained within one worksheet, spread over several worksheets, or even spread over several workbook files. If the calculations become long 


#### 38 Using ExcEl for BUsinEss AnAlysis 

 and confusing, it makes sense to split them into logical sections. For example, they can be split by type of service, customers, financial tables, geographical location, or business segments. 

■ (^) **Colour coding:** If you decide to use colour (and I recommend that you do, or else your model will look pretty boring), make sure that the colours you use are consistent. For example, if African regions are yellow, Europe is blue, and Asia is pink, make sure that you use those same colours every time numbers for Africa, Europe, and Asia are displayed. These colours should be consistent in calculations in your model, display tables, and charts. Some companies have standard colour coding, but if your company does not, you might consider developing a standard. You could consider including a colour code key in the cover page. The use of predefined styles (found on the home tab) can make colour coding very quick and easy. Below are some commonly used colour codes that are supported by the in‐built styles in Excel that you may consider adopting in your company: ■ (^) Blue font and beige background for input cells. ■ (^) Pink or grey for error checks. ■ (^) Green or orange for external links. Formatting can be quite time consuming and using Styles is a much faster way of creating consistent formatting. Figure 2.6 shows where to find the styles menu on the home tab. Use a double border to indicate that the calculations change. In Figure 2.7, the double line shows that the formula is not consistent across the row. Many companies have their predefined colour coding loaded as style templates, which ensures consistency in colour coding in financial models. 

### p rojeCt planning your Model 

Whilst planning ahead is very important for successful modelling, it is unrealistic to expect that a detailed project plan can be created prior to starting to build it. Quite often the modellers do not have much idea of the size and scope of a model until they get in and start working on it. 

#### h w o long does it take to Build a Financial Model? 

Whether you are a consultant building a model for a client, or an internal modeller, you or the person who has commissioned the model build will, understandably, want to know how long it will take. The answer is never straightforward. As with many other tasks, it really depends on how much 


#### 39 

Figure 2.6 

Using the Styles Menu to Format Input Cells 


#### 40 Using ExcEl for BUsinEss AnAlysis 

Figure 2.7 Commonly Used Formatting for Inconsistent Formulas 

time you have (and there’s never enough time) and how much detail the users need. The more time you have, the better the model will be! Some models could take months and months of dedicated work, but it is also possible to throw together a very high‐level model in a day or two. In a high‐level model, the assumptions would probably be only estimates, as you won’t have had time to validate them with stakeholders, and the calculations will be pretty rough. You also might not have much in the way of fancy colours, formatting, drop‐down boxes, or check boxes, but the numbers should still be reasonably accurate. 

#### Building a Model under pressure 

It’s a critical point to remember that even when under immense time pressure, the modeller should never compromise on good work practices. Even in a high‐level model, best practices should be adhered to, and correct labeling and documentation of assumptions should be maintained. For this reason, there should be surprisingly little difference in the base numerical outcome between a high‐level model that takes a few days, and a detailed model that could take months. If pressed for time, cosmetic features such as those shown below should be omitted. Time permitting, the detailed model may show: 

■ (^) Detailed assumptions documentation, validated by key project stakeholders. ■ (^) Scenarios and sensitivity analysis, using drop‐down boxes, check boxes, or data tables. ■ (^) Table of contents or navigation tools. 


#### Building a Model 41 

■ (^) Colours and formatting, conditional formatting, and insertion of company logos. ■ (^) Output summary and detailed analysis of output. Time should be spent on quick wins. Use your judgement to spend your time on calculations that are material to the model. Don’t waste time on validating minor assumptions that are not material to the outcome of the model. 

### Model layout FloW Charting 

Based on an initial concept discussion of the problem, modellers can map out the structure of the model and how it will arrive at the required outputs. For models that will be viewed by external parties, and large or more complex models, a flow chart diagram that maps the model’s structure and how it solves the problem is essential. Not only does this help in building the model, it also helps users of the model to better understand the model’s logic, design, and purpose, and can be used as a presentation tool when explaining the model. Taking time to design the layout and structure of the model is particularly helpful if there is uncertainty about what the model needs to cover, in terms of both breadth and depth. Such flow charts, if created, should become part of the model’s final documentation. There are some pieces of software that will automatically create model flow charts, but most modellers will create them manually using PowerPoint, Visio, or Excel. Of course, it is highly likely that your model will be amended during the build or as the result of a review. Therefore, if you create the flow chart manually, remember to update it as the design of your model changes! In Figure 2.8, the output that is required is to determine what price needs to be charged per customer. This is a high‐level flow chart of what the model might look like. 

### s eps to Building a Modelt 

Once the aforementioned factors have been determined, you can begin to create your model. Most modellers will just dive in and start building, and whilst it’s good to encourage innovation and creativity in creating financial models, it’s still important to follow some ordered steps to achieve the best outcome. If you’re working as the sole financial modeller in a company or as a consultant, you might be able to follow a less formal process, and so I’ve 


#### 42 Using ExcEl for BUsinEss AnAlysis 

 Figure 2.8 Sample Flow Chart of Model Calculations 

 No calls 

 Min per calls 

 Chargeout cost per min Staff Costs Fixed IT Costs 

 Total Cost 

 % Margin 

 No customers 

 Price to charge 

## + 

provided a more streamlined version of the steps to follow (“The Streamlined Version,” below). If you are working as part of a team of financial modellers, the steps are more detailed, as it’s more important to follow a documented and structured process, particularly if there are many modellers and stakeholders providing input. (See “The Team Version” section further on.) 

#### t e h streamlined Version 

This version of the model‐building process is for less formal projects, especially those models designed to be used exclusively by their creator. The seven steps to the streamlined version are as follows: 

**1. Design the high‐level structure.** You’re not going to know exactly what     the layout of the model will be until you dig into it, but you should have     some idea of the tabs. Start by assembling the data you have so far into     the tabs as shown in Figure 2.5. 

**2. Design outputs: summaries, charts, and reports.** Begin with the end     in mind. By thinking about the output of your model early on in the 


#### Building a Model 43 

 process, you’ll be more focused and will ensure that all of your calculations work toward the desired end result. 

**3. Design inputs.** Thinking about the input design issues, get your input     data into the right format or layout so that you can link your calcula-     tions to it. 

**4. Plan calculations by breaking larger problems into smaller ones.** Now     begin your calculations. You might begin by thinking that all expenses     can go on one tab, but if staff costs, for example, begin getting rather     complicated, you might decide that staff costs needs a tab of its own. 

**5. Finalise outputs.** Link through your calculations to the outputs page.     Test at every stage to make sure that the model makes sense and adjust     as necessary. 

**6. Design sensitivities and scenario analysis.** Once the model is working     correctly, you can add sensitivities and scenario analysis. See “Overview     of Scenario Analysis Tools and Methods” in Chapter 11 for greater de-     tail to help you choose which methods of scenario analysis to use. 

**7. Document as you go.** Assumptions documentation should not be left to     the end. Do it _as you go_! 

#### t e h team Version 

If you are working in a large organisation and the modelling project is large, involving several financial modellers and stakeholders, you’ll need to follow a more formal process. The larger the size of the model and the scale of the project, the more up‐front project planning will be required. This detailed process is simply to provide a framework in the absence of one; it should by no means make the process more complex or constrict it, and how closely you stick to the process will depend on the size and scale of the project. The 12 steps have been split into two stages: planning and building. 

**_Planning Stage_** 

**1. Scope out the project.** Assess what needs to be done in order to com-     plete the model. 

■ (^) What is the purpose of the model? Clarify the scope and parameters of the model. Be clear about what the model will be designed to do and its limitations. ■ (^) What is the problem we are trying to solve? Is a model really required and is Excel necessarily the best solution? See “Tool Selection” in Chapter 1 for greater detail on alternative tools. (The rest of this book assumes that the model will continue to be built in Excel.) ■ (^) What’s the time frame? Create a project plan by separating the work that needs to be done into sections and assign the tasks and milestones. 


#### 44 Using ExcEl for BUsinEss AnAlysis 

**2. Assign project tasks.** Once the project has been defined and scoped,     you’ll be able to determine the skills and resources required to complete     the project. 

■ (^) What kind of skills will be needed for this project? Make sure you have a balance of industry, finance, and business skills in the team. (See “What Skills Do You Need to Be a Good Financial Modeller?” in Chapter 1 for greater detail.) Consider hiring external consultants if the skills are not available in‐house. ■ (^) Who will be involved? Identify the stakeholders who need to provide input and validations on the model. Communicate with them about their project requirements and time‐frame expectations. 

**3. Determine the users of the model.** The modeller must know who will be     using the model, as this will affect the technical development. Creating     a model for others to use will require designing an interface that is suit-     able for their needs and, in particular, their level of familiarity with Ex-     cel. This requires consideration of several issues that impact the model     build: 

■ (^) **Excel version.** The modeller needs to consider whether the user may be opening the model in an earlier version of Excel. There are several considerations the modellers need to make if the model must be compatible with the older versions of Excel. For example, the file must be saved as an .xls version, not .xlsx, and the modeller must avoid some of the newer functions. See “Excel Versions” in Chapter 5 for more information on this issue, and “Reducing File Size” in Chapter 10 for how to change the file type. ■ (^) **User‐friendliness.** The weaker that users’ skills are with spreadsheets and modelling, the more user‐friendly the model will need to be, for example, by incorporating more instructions, control tools (such as drop‐down boxes, option boxes), and simple macros. In some cases, a model may be supplied to a third party or made publicly available, through a website, for example. In such cases, the modeller should assume the user has an extremely low level of Excel skill, and the model should be highly protected to make sure that users do not damage the model. See “Bulletproofing Your Model” in Chapter 7 for more information on how to protect models. ■ (^) **Data validation.** The model can be constructed so as to minimise the risk of users entering incorrect data. For example, when entering staff names, they may enter “William Jones” as “Will Jones,” “W. Jones,” “Jones, W.,” or any other number of variations, which can cause errors in a model. The modeller must consider how much validation of inputs should be included, and if error messages should be provided, as this functionality can be quite time consuming to build and test. 


#### Building a Model 45 

■ (^) **Frequency of use.** The modeller needs to consider how outputs can be located and generated and how often the model will be used. If the model is to be used often, the design of the outputs and the time it takes to run should take this into account. Most models will calculate automatically, but more complex models may include a procedure that needs to be manually updated, or macros that may take time. If the model is only to be used occasionally, it may be of less importance if it takes longer to create the outputs each time the model is used. ■ (^) **Testing and adapting.** Creating a model for your own use may not require as much work as creating a model for others. However, it is important to keep in mind that someone else will need to test and validate the model, and others may need to use or adapt the model in future. Modellers should always ensure that the model is generally logical and user‐friendly. 

**4. Design the high‐level structure.** Create a flow chart as discussed in     “Model Layout Flow Charting” earlier in this chapter. 

■ (^) The flow chart will include a place for the input, outputs, summaries, and charts. Create a list of all the outputs needed and how they may be presented (e.g., in a table, chart, diagram, or other method). The outputs and their presentation format should be taken into account when designing the layout of the model. ■ (^) Translate the flow chart into the model. You should have an idea of the number of tabs and how they will be arranged within the model. Try to ensure that the data will flow logically in one direction (right to left) throughout the model, so that links do not jump around, making it confusing to the user. ■ (^) Remember to update the flow chart if the design of the model changes during the building process. 

**5. Create a data collection plan.** Data collection can be the most time‐con-     suming part of a financial modelling project, so this needs to be care-     fully incorporated into the project plan to ensure that the data used in     the model is as accurate as possible and received on time. 

■ (^) Create a list of inputs that will be required and where they will be sourced. These will feed into the project plan as tasks. ■ (^) At this stage you may be able to identify data‐related issues that need attention and consider solutions to anticipated problems. If you are creating a risk register as part of the project planning process, this is a key risk. For example, some inputs may be critical to the model but rely on the data being available. You will need to consider risk‐ mitigation strategies to ensure the availability and reliability of data to be provided by your sources. 


#### 46 Using ExcEl for BUsinEss AnAlysis 

■ (^) The model should be designed to accommodate the format in which the necessary data is available and the output is required. For example, if the data is provided in a weekly format, but the output is required as monthly, you need to consider whether you want to preserve the original data as weekly and consolidate it as part of the model, or consolidate it prior to entering the data into the model. ■ (^) You may even consider designing an information request form for sources to fill in so that the data can be easily extracted and entered into the model. With the plan in place and layout, structure, and logic determined, you can now begin to build the model. **_Building Stage_** 

**6. Build inputs.** Enter the data into the input pages. Make sure that you     follow best practices by documenting all assumptions and source refer-     encing. It is critical that this is done as you enter the data, or when you     record from where you got the data. If there is any possible misinterpre-     tation or lack of clarity about how a calculation works, make sure that     it is explicitly documented, either in the calculations page or as part of     the assumptions. See “Methods and Tools of Assumptions Documenta-     tion” in Chapter 3 for greater detail on tools and techniques that can be     used for documenting assumptions.        As inputs become available and the model is populated with actual     data, it is critical that the source of that data is kept up‐to‐date. Source     referencing of inputs should be sufficiently detailed to allow a third     party to track it back to the source easily. Information should include     title, date, author, page number, web page, and so on to allow for easy     tracing and validation of the model’s input data.        Documentation should include: 

■ (^) A description of the model’s functionality so users will be able to see the general purpose of the model and its limitations, often graphically displayed by a flow diagram of the model’s structure. ■ (^) Instructions on how to use the model, including a colour‐code key explaining the colours and styles used in the model. ■ (^) If a calculation or data point in one section is treated differently from the rest of the model, an explanation of the reason for the difference. ■ (^) Changes to the structure of a model in the version log on the cover page, detailing what structural or major changes were done, when, and by whom. 

**7. Build calculations and workings.** Building accurate and clearly au-     ditable calculations is a critical step in building a financial model. A 


#### Building a Model 47 

 logical calculation should allow users to follow and trace the calculation easily—from the inputs to the outputs, and back again. 

■ (^) Follow best practices by linking to input cells, only enter data once, and always refer to the original source’s cell where possible, rather than linking to another link. ■ (^) Don’t mix hard‐coded data with formulas. If you need to hard‐code a number into a cell, it should be included in the assumptions or source data sheet, and linked from there. ■ (^) Try to work from left to right and top to bottom where possible. ■ (^) Use name ranges in Excel to name single‐cell constants, or tables of inputs. This can make it easier to build and validate formulas in a financial model. (See “Named Ranges” in Chapter 5 for detail on that topic.) ■ (^) Use the superior method and the most efficient functions. This method will be the simplest, most efficient, and easiest to follow. ■ (^) Link logically throughout the model. Try to make sure links go in one direction (from left to right) instead of jumping backward and forward between different tabs. ■ (^) Build error checks wherever possible, and sense‐check and test for errors as you go. ■ (^) Double‐check calculations using alternative calculation methods or by manually calculating from first principles. ■ (^) Document the calculations and their logic as you go; don’t leave it all to the end. Your process may seem obvious to you at the time, but it is probably not clear to someone else reviewing your model. There is a fairly high likelihood that later on you won’t remember why you’ve calculated something a certain way. ■ (^) Long calculations should be broken up into logical components of simpler calculations. This will avoid one long formula in Excel, making it easier to understand, test, and update, and greatly reduce the possibility of error. (See “How Long Should a Formula Be?” in Chapter 4 for an example of how trying to do too much in one cell can make a calculation extremely difficult to follow.) ■ (^) A more detailed flow chart expanding out the calculations into subcomponents may be the clearest way to present the model’s logic if a calculation is particularly complex. This can be done in Excel by taking an example piece of input data and documenting its flow throughout the calculations. 

**8. Build outputs: summaries, charts, and reports.** Begin to summarise the     calculation on the output page. 

■ (^) Continue to test and check for formula and logic errors at every stage of building. 


#### 48 Using ExcEl for BUsinEss AnAlysis 

■ (^) Follow best practices as outlined above for outputs as well as calculations. 

**9. Peer and client review of draft model.** Now that the model’s design,     logic, and calculations have been determined, it is important to go     through it with the rest of the team to ensure that the model meets     its purpose. Get the team together, take a key input, and follow it     through from beginning to end. The timing of this review is impor-     tant, as it needs to occur after some of the model has been built, to     allow the reviewers to check the expected outputs and how the mod-     el operates in practice; however, the model should not be finalised yet     in case there are significant structural changes required as a result of     the review.        Not only must a model solve the problem for which it is designed,     user acceptance of the model is also important. Clients (end users) must     accept and understand the model. A walkthrough at this stage may as-     sist to identify areas where corrections or modifications are needed, and     will also allow the user to become familiar with how the model is in-     tended to work.        Factors to be considered in the peer draft review are: 

■ (^) Walk through the calculations: Are they accurate at a high level? ■ (^) Are the assumptions and source data clearly driving the output? ■ (^) Does the model solve the problem it is being designed to solve? ■ (^) Are the flow and structure easy to follow? Note that this peer review is your last chance to ensure that there are no formula or logic errors in the model prior to the formal quality assurance (QA) of the model. Modellers should be confident that their models submitted for formal QA are free from mistakes. 

**10. Design sensitivities and scenario analysis.** Once the base model is com-     pleted and working correctly, you can add sensitivities and scenario     analysis. The inputs for scenario analysis may not have been determined     as part of the planning process, and now that the base model is com-     plete, you will be able to test the inputs to see their impact. This may     influence your decision as to what to show in the scenario analysis. 

**11. Formal model QA (quality assurance) check.** This final QA check of the     model is a formal process and should not be confused with continual     testing and debugging that should have taken place during the model     build. (See “Error Avoidance Strategies” in Chapter 4 for greater detail     on the tests and checks that should be done by the modeller during     the build process.) It is the modeller’s responsibility to ensure that the     model is accurate, robust, and operational. The QA process should not     uncover formula or logic errors at this late stage, and discovery of such     will raise questions about the competency of the modeller. The model’s     final QA testing process includes: 


#### Building a Model 49 

■ (^) Stress‐testing the inputs with a wide range of values to check the inner workings of the model. This includes testing values at the extremes to ensure that the model processes the input as expected, especially where validation and protection are used. Also test a wide range and combination of input variables, as some hidden bugs may exist in the calculations. Using 0 or 1 can help to highlight obvious errors, as the outputs should be simple. For example, a unit price of zero should generate a revenue of zero and if it does not, you’ll need to investigate why not! ■ (^) Check that Excel errors such as “#DIV/0!” have not been triggered by entering zeros or other invalid data as inputs. ■ (^) Make sure that all inputs can still be entered properly. By applying protection to a model, a modeller can inadvertently cause switches and drop‐downs to stop working. If protection is applied, additional testing and checking will need to be carried out. ■ (^) Check the sensitivity of outputs (dependent variables) to changes in the inputs (independent variables). Part of the QA process should be to check that the direction and magnitude of the change are in accordance with how you logically expect the outputs to behave. ■ (^) Check all documentation for spelling, grammar, colour coding consistency, and presentation. ■ (^) As the model goes through several iterations, it’s common to find that redundant calculations are included even though they are no longer useful or applicable to the model. Tracing dependents is useful for identifying input data that is not being used. 

**12. Maintain the model.** Once a model is completed and provided to the     users, it is fairly likely that at some point—weeks, months, or years after     the model has been completed—maintenance or updating of the model     will need to be undertaken. If it’s simply to change inputs, this can be     done by the user, but if the change is major or structural, a model devel-     oper should be the one to make the changes.        Depending on the availability of resources, it is preferable that a     member of the original model‐building team undertake the update, but     if best practices have been followed throughout the build process, if it     has been well documented and built in a robust fashion, and if the mod-     eller doing the update is well versed in financial modelling procedure,     updating the model should not pose any problem.        When the model is updated or amended, especially if the change is     structural, version control processes need to be followed to ensure that     the correct version of the model is used. Below is some more informa-     tion on how to document versions correctly. 


#### 50 Using ExcEl for BUsinEss AnAlysis 

### i nForMation requests 

The collection of data is a critical part of financial modelling, as a model is only as good as its inputs and, in many cases, the inputs of the model rely solely on information from other parties, whether internal or external to the organisation. Therefore, the receipt of timely and accurate information from these parties is important. Sometimes as much time can be spent collecting data as actually building the model and if this is an issue, you may consider creating a formalised information‐request procedure. Larger organisations, particularly government agencies, often already have information templates in place for purposes such as compliance and monitoring, and will not encounter much resistance internally to their introduction. However, advice on how to go about implementing information requests is outlined in the following: 

■ (^) Incorporate tables for key data and make provisions for executive sign‐off. ■ (^) Liaise at an early stage with the other parties about the information requested and its purpose. Different departments and other companies have different information systems, and so the form in which data is available may differ. Work closely with the other parties to communicate the purpose of the information, and to devise templates that facilitate easy collection of input data. ■ (^) Design the information request so that the data is provided in the correct format by using import and export sheets. This is useful for large data sets and, if used frequently, macros speed up the insertion of data into the model. ■ (^) Design the data‐collection sheets such that once completed, they can be fed directly into the model by copying and pasting or using links. No manual data entry should be required to save time and reduce the possibility of error. ■ (^) Make clear what is expected in terms of data quality. It is possible that the information provided by other parties is not entirely accurate, so you may consider subjecting that information to internal QA processes. Normally model input data is simply taken at face value, and the source documented in the assumptions, but a QA of the data will provide a greater degree of assurance that the data being input to the model is complete, accurate, and consistent. Make sure that the party providing the information is aware of this procedure in advance. ■ (^) Provide a timeline that is sufficient for the parties to respond to information requests. This will feed into the project plan as outlined above. 


#### Building a Model 51 

 The modellers will also need to allow time to check the quality and reliability of the information that has been submitted. 

■ (^) Ensure consistency of information‐request templates with previous templates that have been issued, and try to ensure consistency with previous requests that may have been distributed in the past. ■ (^) Pre‐fill information request documents with existing information where available, as this will expedite the process. ■ (^) Even if the modeller sets up an information request in the correct format that is required to input directly into the model, there is always the risk that the person entering the data will insert or delete rows, columns, or formulas. It is advisable to protect the worksheets to prevent this happening, as an extra row when copying, pasting, or linking data can be disastrous! 

### Version-Control doCuMentation 

A new version of the model means structural changes to the design or new calculations. It should not be confused with changes to input variables such as those in blue font on the source data page. Changes to input variables are simply changes to scenarios or sensitivity, not a new version. A version‐control log is usually located on the cover sheet of a model, although in particularly long or complex models it may warrant having its own worksheet tab. It’s important to remember that any new versions of a model subsequent to its being completed still need to go through the QA process. There is no point in creating a model that has been through the sign‐off process only to make changes that do not meet the same standards. Below are a few generally accepted guidelines to follow when creating a new model version: 

■ (^) File names should end with a version number. For example: ■ (^) [description of model] [date] [Version number].xlsx ■ (^) HoneyCorp RePricing Model 16 July 2016 V1.xlsx ■ (^) If this is a sizable project and it’s going through multiple versions, which need to be tracked, each model should contain a log (usually located on the cover sheet) that lists the original version of the model and details the calculation changes made to that version since inception. Information that needs to be included on the version‐control log is: ■ (^) Version number and date. ■ (^) Description of changes clearly detailing each change that was made for that version. 


#### 52 Using ExcEl for BUsinEss AnAlysis 

■ (^) Where in the model the changes were made. ■ (^) Who made the changes. ■ (^) A mark to show that the changes have been through QA. ■ (^) Any necessary comments explaining the changes (e.g., a change in cost structure or a new scenario needed to be built). 

#### File structure 

Over the course of a complex modelling project with multiple versions, you need to put some thought into the file structure to ensure ease of finding the correct version. A modeller who picks up and works on the incorrect file can experience disastrous results and also waste a lot of time. Your file directory might look something like Figure 2.9. Keep a separate folder for each project. In this case, the HoneyCorp Repricing project has its own folder. Underneath you find: 

■ (^) **Models:** A list of the model with version‐control nomenclature applied. If there are several models pertaining to the project, create subfolders in this section. You might delete older versions of the model (if you are sure that they are completely redundant) once the project is complete to save on file space. ■ (^) **Project planning:** Documents relating to the project plan, resource allocation, and timelines. ■ (^) **Source data:** All the details about where the data for the model came from. The models should be linked to this folder for auditability. Be extremely careful with linking if there are several versions of the source data files. Use the “edit links” function to manage the links between the files. This sample folder directory is only a guideline, and assumes a medium‐ sized financial modelling project in terms of size and complexity. Add as Figure 2.9 Sample File Structure 


#### Building a Model 53 

many folders as you need, but make sure they’re well organised and easy to navigate so you can find the required information. 

### s uMMary 

In conclusion, considering the layout and design of a financial model is an important part of the model build. It takes a unique mixture of logic, clarity of thought, and graphic layout skills by the financial modeller to build a well‐designed model, and this often proves to be difficult to implement in practice. Model design can sometimes be the most difficult part of building a financial model and it is, in my experience, one of the most difficult aspects to teach and learn. When building your model, pay close attention to the design layout and ensure that it is clear, coherent, and logically structured. 



